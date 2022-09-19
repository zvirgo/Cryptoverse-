import React from 'react'
import { Layout, Menu, Image, Typography,Row  } from 'antd';
import { Link } from 'react-router-dom'

import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined } from '@ant-design/icons';
import logo from '../images/cryptocurrency.png'

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      {/* <Avatar src={icon} size="large" /> */}
      <Row justify="space-around" align="middle">
        <Image preview={false} width={50} src={logo}
        />
        <Typography.Title level={4} className='logo' style={{ marginBottom: 0 }}>
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
      </Row>
      <Menu theme='dark'>
        <Menu.Item icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />}>
          <Link to="/Cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined />}>
          <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />}>
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default Sidebar