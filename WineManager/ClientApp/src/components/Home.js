import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import './Home.css';

function Home(props){
  
  return(
    <div id='home'>

        <Card title='Favorites' links={[{ name: 'Go', link: '/favorites' }]} />

        <Card title='Profile' links={[{ name: 'Go', link: '/profile' }]} />
        
        <Card title='Locations' links={[{name: 'test location 1', link: '/locations/1'}]}/>

    </div>
  )
};

export default connect()(Home);
