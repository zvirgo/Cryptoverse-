import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined } from '@ant-design/icons';
import { Layout, Menu, Avatar } from 'antd';
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Sidebar, News, Exchanges, Homepage, Cryptocurrencies, CryptoDetails } from './components/index'

import icon from './images/cryptocurrency.png'

const {  Content, Footer } = Layout;

const App = () => (
  <Layout>
   <Sidebar/>
    <Layout>
      <Content
        style={{
          margin: '24px 16px 0',
        }}
      >
        <div
          className="site-layout-background"
          style={{
            padding: 24,
            minHeight: 360,
          }}
        >
          <Layout>
          <div className='routes'>
            <Routes>
              <Route exact path='/' element={<Homepage />} />
              <Route exact path='/exchanges' element={<Exchanges />} />
              <Route exact path='/cryptocurrencies' element={<Cryptocurrencies />} />
              <Route exact path='/crypto/:coinId' element={<CryptoDetails />} />
              <Route exact path='/news' element={<News />} />
            </Routes>
          </div>
        </Layout>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Cryptoverse ©2022 All rights reserved
      </Footer>
    </Layout>
  </Layout>
);

export default App;