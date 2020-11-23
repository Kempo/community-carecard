import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import {
  Button, Drawer, Layout, Menu,
} from 'antd';
import { useTranslation } from 'react-i18next';
import { MenuOutlined } from '@ant-design/icons';
import { useWindowWidth } from '@react-hook/window-size';
import { emitClickEvent } from 'services/Analytics';
import { isPhone } from 'services/deviceWidthHelper';
import logo from 'images/logo.png';
import icon from 'images/icon.png';
import './style.scss';

const Header = () => {
  const width = useWindowWidth();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const { t } = useTranslation();
  const history = useHistory();

  const handleOnboard = () => {
    emitClickEvent('Button', 'I have a business');
    history.push('/onboard');
  };

  const toggleDrawerOpen = () => setDrawerOpen(!drawerOpen);

  const renderButton = () => (
    <Button className="btn-outlined-secondary business-button" onClick={handleOnboard}>
      {t('HEADER.I_HAVE_BUSINESS')}
    </Button>
  );

  const renderMenu = () => (
    <Menu
      className="header-menu"
      selectedKeys={[pathname]}
      mode={isPhone(width) ? 'inline' : 'horizontal'}
      onSelect={() => setDrawerOpen(false)}
    >
      <Menu.Item key="/">
        <Link to="/">
          <span title={t('HEADER.NAV.HOME')}>
            {t('HEADER.NAV.HOME')}
          </span>
        </Link>
      </Menu.Item>
      <Menu.Item key="/about">
        <Link to="/about">
          <span title={t('HEADER.NAV.ABOUT_US')}>
            {t('HEADER.NAV.ABOUT_US')}
          </span>
        </Link>
      </Menu.Item>
      <Menu.Item key="/faq">
        <Link to="/faq">
          <span title={t('HEADER.NAV.FAQ')}>
            {t('HEADER.NAV.FAQ')}
          </span>
        </Link>
      </Menu.Item>
      {isPhone(width) && (
        <Menu.Item key="/onboard">
          <Link to="/onboard">
            <span title={t('HEADER.I_HAVE_BUSINESS')}>
              {t('HEADER.I_HAVE_BUSINESS')}
            </span>
          </Link>
        </Menu.Item>
      )}
    </Menu>
  );

  return (
    <Layout.Header className="header">
      <div className="header-content">
        <Link to="/">
          {
            isPhone(width) ? (
              <img src={icon} alt="" className="ccc-icon" />
            ) : (
              <img src={logo} alt="" className="logo" />
            )
          }
        </Link>
        <div className="header-right">
          {isPhone(width) ? (
            <React.Fragment>
              <MenuOutlined className="hamburger-icon" onClick={toggleDrawerOpen} />
              <Drawer
                className="mobile-drawer"
                onClose={() => setDrawerOpen(false)}
                placement="right"
                visible={drawerOpen}
              >
                {renderMenu()}
              </Drawer>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {renderMenu()}
              {renderButton()}
            </React.Fragment>
          )}
        </div>
      </div>
    </Layout.Header>
  );
};

export default Header;
