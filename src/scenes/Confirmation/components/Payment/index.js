import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, List, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons'
import { useTranslation, Trans } from 'react-i18next';
import { transactionDetailsUrl } from '../../../../services/urlHelper';
import { dollarFormat } from '../../../../services/Numbers';
import { useQueryParams } from '../../../../hooks/useQueryParams';

import './style.scss';
import lovingImg from '../../../../images/payment/loving.png';

const Payment = () => {
  const [details, setDetails] = useState({});
  const { total, contribution, processingFee, orderLine, customerEmail } = details;
  const { t } = useTranslation();

  const { orderId } = useQueryParams('orderId')

  useEffect(() => {
    axios.get(transactionDetailsUrl(orderId))
      .then(res => setDetails(res.data.orderDetail))
      .catch(err => setDetails({ error: true }));
  }, [orderId]);

  const combinedTips = orderLine ? orderLine.reduce((a, b) => (a + b.tip), 0) : 0;
  const totalAfterAll = dollarFormat(total + processingFee);

  const loadingIcon = <LoadingOutlined style={{ fontSize: 48 }} spin />;

  const filteredList = () => {

    const list = []

    orderLine.map(order => (
      list.push({
        left: `Gift Card(s) - ${order.businessName}`,
        right: `$ ${dollarFormat(total - contribution - order.tip)}`
      })
    ));

    if(combinedTips > 0) {
      list.push({
        left: t('CONFIRMATION_MODAL.ITEMIZED.DONATION'),
        right: `$ ${dollarFormat(combinedTips)}`
      });
    }

    if(contribution > 0) {
      list.push({
        left: t('CONFIRMATION_MODAL.ITEMIZED.COFFEE'),
        right: `$ ${dollarFormat(contribution)}`
      });
    }

    list.push({
      left: t('CONFIRMATION_MODAL.PROCESSING_FEE'),
      right: `$ ${dollarFormat(processingFee)}`
    });

    return list;
  }

  const renderReceipt = () => (
    <React.Fragment>
      <Row justify="center">
        <Col xs={20} md={16}>
          <h6>
            <Trans>
              {t('PAYMENT_SUCCESS.DESC', { email: customerEmail })}
            </Trans>
          </h6>
        </Col>
      </Row>
      <Row className="order-summary" justify="center">
        <Col xs={20} md={16}>
          <List
            header={<strong><Trans>{t('PAYMENT_SUCCESS.ORDER_ID')}</Trans></strong>}
            itemLayout="horizontal"
            footer={<strong>{`${t('CONFIRMATION_MODAL.TOTAL')}: $ ${totalAfterAll}`}</strong>}
            bordered={true}
            dataSource={filteredList()}
            style={{textAlign: 'left'}}
            renderItem={item => (
              <List.Item extra={item.right}>
                <List.Item.Meta
                  title={item.left}
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </React.Fragment>
  );

  const renderLoading = () => (
    <Row justify="center">
      <Col span={12}>
        <Spin indicator={loadingIcon} tip="Loading..." />
      </Col>
    </Row>
  );

  return (
    <Row justify="center" className="payment-body">
      <Col xs={22} md={20}>
        <img src={lovingImg} alt="Thank you!" />
        <h2>{t('PAYMENT_SUCCESS.TITLE')}</h2>
        <h6>
          <Trans>{t('PAYMENT_SUCCESS.ID', { id: orderId })}</Trans>
        </h6>
        { 
          total ? renderReceipt() : (!details.error ? renderLoading() : <h6><Trans i18nKey="PAYMENT_SUCCESS.ERROR" /></h6>) 
        }
      </Col>
    </Row>
  )
};

export default Payment;
