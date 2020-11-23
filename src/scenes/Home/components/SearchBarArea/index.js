import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Row, Col
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { useWindowWidth } from '@react-hook/window-size';
import { isPhone } from 'services/deviceWidthHelper';
import PlaceSearch from 'components/PlaceSearch';
import CImg from '../../../../images/c-icon-small.png';
import './style.scss';

const SearchBarArea = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const width = useWindowWidth();

  const navigateToBusiness = id => id && history.push(`/businesses/${id}`);

  function handleIconClick() {
    document.getElementById("place-search").focus();
  }

  return (
    <div className="search-area-container" id="search-area">
      <Row justify="center">
        <Col xs={20} lg={14}>
          <p className="main-header">{t('HOME.SEARCH_MAIN')}</p>
          <div className="search-area">
            <SearchOutlined className="search-icon" onClick={handleIconClick} /><PlaceSearch onSelect={navigateToBusiness} placeholder={isPhone(width) ? t('HOME.SEARCH_PLACEHOLDER_MOBILE') : t('HOME.SEARCH_PLACEHOLDER')} />
          </div>
          <div className="search-area-text">
            <p>
              {t('HOME.SEARCH_TEXT_TWO')}
            </p>
          </div>
	  <img className="c-logo" src={CImg} alt="" />
        </Col>
      </Row>
    </div>
  );
};

export default SearchBarArea;
