import React, { useCallback, useEffect, useState } from 'react';
import {
  Form, Button, Input, Row,
} from 'antd';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import PlaceSearch from '../../../../components/PlaceSearch';
import { claimBusinessUrl } from '../../../../services/urlHelper';
import './style.scss';

const OnboardForm = (props) => {
  const {
    bizId, name, onError, onSuccess,
  } = props;

  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { t } = useTranslation();

  const setBusinessId = useCallback((businessId) => {
    form.setFieldsValue({ businessId });
  }, [form]);

  useEffect(() => {
    if (bizId !== '' && name === '') {
      history.push('/');
    }
  }, [bizId, name, history]);

  useEffect(() => {
    setBusinessId(bizId);
  }, [setBusinessId, bizId]);

  const submitForm = (v) => {
    setLoading(true);
    axios.post(claimBusinessUrl, v)
      .then((res) => {
        setLoading(false);
        onSuccess(res.data.business);
      })
      .catch((err) => {
        setLoading(false);
        onError(form.getFieldValue('businessId'), err);
      });
  };

  return (
    <Form
      id="business-form"
      layout="vertical"
      size="large"
      form={form}
      onFinish={submitForm}
    >

      <Form.Item
        label={<span> <span style={{color: 'red'}}>*</span> {t('ONBOARD.FORM.LABEL.BIZ.NAME')}</span>}
      >
        {bizId !== '' && name !== ''
          ? <Input disabled value={decodeURIComponent(name)} />
          : (
            <PlaceSearch
              onSelect={setBusinessId}
              placeholder={t('ONBOARD.FORM.LABEL.BIZ.NAME')}
            />
          )
        }
      </Form.Item>
      <Form.Item
        className="hidden-field-with-validation"
        style={{ marginTop: 0, marginBottom: 0 }}
        name="businessId"
        rules={[{ required: true, message: t('ONBOARD.FORM.ERROR.BIZ') }]}
      >
        <Input style={{display: 'none'}} disabled={true} placeholder={t('ONBOARD.FORM.LABEL.BIZ.ID')} />
      </Form.Item>
      <Form.Item
        name="email"
        label={t('ONBOARD.FORM.LABEL.EMAIL')}
        rules={[{ required: true, type: 'email', message: t('ONBOARD.FORM.ERROR.EMAIL') }]}
      >
        <Input placeholder="hello@hello.com" />
      </Form.Item>
      <Form.Item
        name="phone"
        label={t('ONBOARD.FORM.LABEL.PHONE')}
        rules={[
          { required: true, message: t('ONBOARD.FORM.ERROR.PHONE.REGULAR') },
          { min: 10, message: t('ONBOARD.FORM.ERROR.PHONE.LENGTH') },
        ]}
      >
        <Input maxLength={19} placeholder="xxx-xxx-xxxx" />
      </Form.Item>
      <Form.Item
        name="description"
        label={t('ONBOARD.FORM.LABEL.DESC')}
        rules={[{ required: true, message: t('ONBOARD.FORM.ERROR.DESC') }]}
      >
        <Input.TextArea
          placeholder={t('ONBOARD.FORM.PLACEHOLDER.DESC')}
          maxLength={800}
          rows={4}
        />
      </Form.Item>
      <Form.Item>
        <Row justify="center">
          <Button
            className="btn-filled-action"
            htmlType="submit"
            loading={loading}
          >
            {t('ONBOARD.FORM.SUBMIT')}
          </Button>
        </Row>
      </Form.Item>
    </Form>
  );
};

OnboardForm.propTypes = {
  bizId: PropTypes.string,
  name: PropTypes.string,
  onError: PropTypes.func,
  onSuccess: PropTypes.func,
};

OnboardForm.defaultProps = {
  bizId: '',
  name: '',
  onError: () => {},
  onSuccess: () => {},
};

export default OnboardForm;
