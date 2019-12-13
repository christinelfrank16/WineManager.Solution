import React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';
import './Layout.css';

export default props => {
  return (
    <div>
      <NavMenu />
      <Container>
        {props.children}
      </Container>
    </div>
  )
};
