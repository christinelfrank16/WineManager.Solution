import React from 'react';
import $ from 'jquery';
import 'bootstrap';
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
  function makeLocationLinks(){
    console.log(props.locations);
    let locationLinks = [];
    if(props.locations && props.locations.length !== 0){
      props.locations.forEach((locationData) => {
        locationLinks.push(
          {
            name: locationData.name,
            id: locationData.locationId,
            link: '/locations/'+locationData.locationId
          }
        )
      });
    }
    return locationLinks;
  }
  return(
    <div id='home'>

        <Card title='Favorites' links={[{ name: 'Go', link: '/favorites' }]} />

        <Card title='Profile' links={[{ name: 'Go', link: '/profile' }]} />
        
        <Card title='Locations' buttonName='Add Location' onButtonClick={handleNewLocationClick} links={makeLocationLinks()}/>
        <Modal title='Add New Location' content={<NewLocationForm handleNewLocationSubmit={handleNewLocationClick}/>} />

    </div>
  )
};

export default Home;
