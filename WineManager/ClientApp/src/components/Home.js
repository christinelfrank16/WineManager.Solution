import React from 'react';
import { connect } from 'react-redux';
import useBreakpoints from './hooks/ViewportSize';
import Card from './Card';

function Home(props){
  const queries = {
    xs: '(max-width: 320px)', //query for xs devices
    sm: '(max-width: 720px)',
    md: '(max-width: 1024px)'
  }
  const point = useBreakpoints(queries);
  return(
    <div >

        <Card title='Favorites' links={[{ name: 'Go', link: '/favorites' }]} />

        <Card title='Profile' links={[{ name: 'Go', link: '/profile' }]} />
        
        <Card title='Locations' links={[{name: 'test location 1', link: '/locations/1'}]}/>

    </div>
  )
};

export default connect()(Home);
