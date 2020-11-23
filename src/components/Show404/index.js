import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Button } from 'antd';
import { useTranslation } from 'react-i18next';

import img404 from '../../images/404.png';
import './style.scss';

const Show404 = () => {
  
  const { t } = useTranslation();

  return (
    <div className="not-found">
        <h2>{t('NOT_FOUND.HEADER')}</h2>
        <Row justify="center"> 
          <img src={img404} alt="Page not found" />
        </Row>
        <p className="subheader">{t('NOT_FOUND.SUBHEADER')}</p>
        <Link to="/home">
          <Button size="large">
            {t('NOT_FOUND.ACTION')}
          </Button>
        </Link>
    </div>
  )
};

export default Show404;
