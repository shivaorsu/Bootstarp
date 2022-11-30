import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Button,Card } from 'react-bootstrap';


function BrandExample() {
  return (
    <>
      <Navbar bg="dark" expand='sm' variant='dark'>
        <Container>
          <Navbar.Brand >Home</Navbar.Brand>
          <Navbar.Brand >Store</Navbar.Brand>
          <Navbar.Brand >About</Navbar.Brand>
          <Button bg='light' variant="outline-info">
              Cart 
            </Button>
       </Container>
       </Navbar>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src='https://prasadyash2411.github.io/ecom-website/img/Album%201.png' />
      <Card.Body>
        <Card.Title>$12.99</Card.Title>
        <Button variant="primary">Add Cart</Button>
      </Card.Body>
    </Card>
    </>
  );
}

export default BrandExample;