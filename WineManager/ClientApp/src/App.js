import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';


export default () => {

  return(
    <Layout>
      <Route exact path='/' component={Home} />
      <Route path='/locations/:locationId?' component={Counter} />
      <Route path='/favorites/:favoriteId?' component={FetchData} />
      <Route path='/profile' />
    </Layout>
  )
};
