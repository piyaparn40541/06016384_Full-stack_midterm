import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Welcome from './Welcome';
import Home from './Home';
import PostContent from './PostContent';
import Author from './Author';
import TagContent from './TagContent';
import CategoryContent from './CategoryContent';

import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            CMS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/">
                62070120
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/post/:id" element={<PostContent />} />
        <Route path="/author/:id" element={<Author />} />
        <Route path="/tag/:id" element={<TagContent />} />
        <Route path="/category/:id" element={<CategoryContent />} />
      </Routes>
    </div>
  );
}

export default App;
