import React from 'react';
import $ from 'jquery';
import 'bootstrap';
import { connect } from 'react-redux';
import Card from './Card';
import Modal from './Modal';
import NewLocationForm from './NewLocationForm';
import './Home.css';

function Home(props){
  function handleNewLocationClick(showModal){
    if(showModal){
      $('#confirm').modal('show');
    } else {
      $('#confirm').modal('hide');
    }
  }
  return(
    <div id='home'>

        <Card title='Favorites' links={[{ name: 'Go', link: '/favorites' }]} />

        <Card title='Profile' links={[{ name: 'Go', link: '/profile' }]} />
        
        <Card title='Locations' buttonName='Add Location' onButtonClick={handleNewLocationClick} links={[{name: 'test location 1', link: '/locations/1'}]}/>
        <Modal title='Add New Location' content={<NewLocationForm handleNewLocationSubmit={handleNewLocationClick}/>} />

    </div>
  )
};

export default connect()(Home);
