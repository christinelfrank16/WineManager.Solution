import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';

function Home(props){
  const sameline = {
    display: 'inline-block'
  }
  return(
    <div style={sameline}>

        <Card title='Locations' links={[{name: 'test location 1', link: '/location/1'}]}/>

        <Card title='Favorites' links={[{ name: 'Go', link: '/favorites' }]} />

        <Card title='Profile' links={[{ name: 'Go', link: '/profile' }]} />

    </div>
  )
};

export default connect()(Home);
