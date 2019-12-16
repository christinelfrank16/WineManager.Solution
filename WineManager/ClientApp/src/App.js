import React from 'react';
import { Route } from 'react-router';
import { connect } from 'react-redux';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import { getLocations } from './actions/location-actions';


class App extends React.Component{

  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(getLocations()).then(() => console.log(this.props));
  }

  render(){
    return(
      <Layout>
        <Route exact path='/' render={() => <Home locations={this.props.locations} />} />
        <Route path='/locations/:locationId' render={(routerProps) => <Location locationId={routerProps.match.params.locationId}/>} />
        <Route path='/favorites/:favoriteId?' component={FetchData} />
        <Route path='/profile' />
      </Layout>
    )
  }
};

const mapStateToProps = state => {
  return {
    locations: state.locations
  }
}

export default connect(mapStateToProps)(App);