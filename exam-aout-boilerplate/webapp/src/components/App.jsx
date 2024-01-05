import React from 'react';

import { Layout, Menu } from 'antd'
import { Context as JokeProviderWrapper } from '../contexts/JokeContext';
import { useContext } from 'react';
import JokesList from './Jokes/JokesList';
import {
  BrowserRouter as Router,
Routes, Route, Link
} from 'react-router-dom'
import About from './About/About';
import OneJoke from './Jokes/OneJoke';

const { Header, Content } = Layout


const App = () => {
  const { getAllJokes } = useContext(JokeProviderWrapper);
  const jokes = getAllJokes();
  return (
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal" selectedKeys={[]}>
          <Link to="/jokes">   <Menu.Item>Jokes</Menu.Item> </Link>
          <Link to="/about">   <Menu.Item>About</Menu.Item> </Link>
        </Menu>
      </Header>
      <Content style={{ padding: '30px 50px' }}>
        <h1><i><u> Jokes Website </u></i></h1>
        <Routes>
          <Route path='/jokes' element={<JokesList jokes={jokes} />} />
          <Route path='/jokes/:id' element={<OneJoke />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Content>
    </Layout>
  )
}

export default App
