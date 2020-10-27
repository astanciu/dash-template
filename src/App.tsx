import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';

export default function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Dashboard</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse >
          <Nav >
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container fluid>
        <Row>
          <Col md={2}>
            <Nav defaultActiveKey="/" className="flex-column">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
            </Nav>
          </Col>
          <Col md={9}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router >
  );
}

interface Props {
  children?: React.ReactNode
}

function Home({ children }: Props) {
  return (
    <div>
      <h2>Home</h2>
      <Button >Test</Button>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>Aboutysds</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
