import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
// import React from 'react';
export default function () {
  const [show, setShow] = useState(false);
  const [file, setFile] = useState();

  const handleClose = () => setShow(false);
  function handleShow() {
    setShow(true);
    setFile();
  }

  function handleChange(e) {
    // console.log(e.target.files);

    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <Container style={{ marginTop: "100px", backgroundColor: "#ffff" }}>
      <Button
        variant="secondary"
        style={{ float: "right", margin: "20px" }}
        onClick={handleShow}
      >
        Add a Issue
      </Button>
      <Table
        striped
        bordered
        hover
        style={{
          boxShadow: "rgb(0 0 0 / 32%) 1px 9px 13px",
          marginBottom: "10px",
        }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Issue</th>
            <th>Created On</th>
            <th>Developer</th>
            <th>status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Damage Product</td>
            <td>20-03-2023</td>
            <td>ABC</td>
            <td>Active</td>
            <td>
              <Button>Update</Button> <Button variant="danger">Delete</Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Damage Product</td>
            <td>25-03-2023</td>
            <td>XYZ</td>
            <td>Pending</td>
            <td>
              <Button>Update</Button> <Button variant="danger">Delete</Button>
            </td>
          </tr>
        </tbody>
      </Table>
      <br></br>
      <br></br>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Issue</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name of isuue</Form.Label>
              <Form.Control type="text" placeholder="Enter issue " required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Description" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" onChange={handleChange} required />
            </Form.Group>
            <div
              style={{
                height: "200px",
                width: "350px",
                border: "1px solid #262626",
              }}
            >
              <img
                src={file}
                style={{ height: "200px", width: "350px" }}
                alt="Image Preview"
              />
            </div>
            <br></br>
            <Button variant="primary mt-2 " type="button" onClick={handleClose}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
