import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import "../styles/styles.css"
import SearchFormModal from "./SearchFormModal";

const Header = () =>{

    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
  


    return(
        <div className="header">
 <Navbar expand="lg" className="bg-body-tertiary navbar fixed-top container-fluid">
      <Container>

       {/* Navbar-Brand */}

        <Navbar.Brand href="#home">
        <img
          src="./images/navbar-logo.png"
          width="90%"
          height="30vh"
          className="d-inline-block align-top nav-logo"
          alt="Slack.com"
        />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

        {/* Dropdown-1 */}

          <NavDropdown title="Features" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            {/* Dropdown-2 */}

            <NavDropdown title="Solutions" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#home" className="nav-link1">Enterprise</Nav.Link>

            {/* Dropdown-3 */}

            <NavDropdown title="Resources" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#link" className="nav-link1">Pricing</Nav.Link>

          <div className="nav-right">

          <Nav.Link href="#link" className="">
          <span class="material-symbols-outlined search-icon" onClick={handleShow}>search</span>
          </Nav.Link>

          <SearchFormModal showModal={showModal} handleClose={handleClose} />

          <Nav.Link href="#link" className="nav-link1 sign-in-link">Sign in</Nav.Link>

          <div className=' col-lg-12 nav-left nav-btn'>
          <ul>
  
          <Nav.Link href="#link" className="">
          <Button variant="outline-light btn-1" size='md'>TALK TO SALES</Button>
          </Nav.Link>
         
          <Nav.Link href="#link" className="">
          <Button variant="outline-light btn-light btn-2" size='md'>TRY FOR FREE</Button>
          </Nav.Link>
          
         </ul>
          </div>

          </div>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    )
}
export default Header;