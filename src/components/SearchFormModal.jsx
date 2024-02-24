// SearchFormModal.js
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const SearchFormModal = ({ showModal, handleClose }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Implement your search logic here
    console.log('Search query:', searchQuery);
    // Close the modal after searching (you can modify this behavior)
    handleClose();
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
        <a href='#home' className='nav-link1'>
        <img
          src="./images/logo-complete.png"
          width="110%"
          height="70vh"
          className="d-inline-block align-top"
          alt="Slack.com"
        />
        </a>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formSearch">
            <Form.Label>Let's Get Started</Form.Label>
            <Form.Control
              type="text"
              placeholder="Search everything here"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSearch}>
          Search
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SearchFormModal;
