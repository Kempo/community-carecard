import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './routes';
import ScrollToTop from './components/ScrollToTop';
import './App.scss';

const App = () => (
  <BrowserRouter>
    <Layout className="layout">
      <Header />
      <Layout.Content>
        <div className="content">
          <ScrollToTop />
          <Routes />
        </div>
      </Layout.Content>
      <Footer />
    </Layout>
  </BrowserRouter>
);

export default App;
