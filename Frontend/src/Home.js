import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import Button from "react-bootstrap/Button";
import maxresdefault from './image/maxresdefault.jpg'
import { Container, Row, Col, Card } from "react-bootstrap";
export default function (props) {
  return (
    <Container fluid>
      <Row>
        <Col
          lg="12"
          className="bannerImage align-items-end d-flex justify-content-start "
        >
          <div className="mb-2">
            <h3>Welcome, User</h3>

            <Button variant="danger ">Logout</Button>
            <Button variant="primary ms-2 ">Info</Button>
          </div>
        </Col>
      </Row>
      <br></br>

      <Row>
        <Col lg="3" className="justify-content-md-center">
          <Card style={{ width: "18rem", height: "200px" }}>
            <Card.Body
              style={{ backgroundColor: "#41aaad" }}
              className="align-items-center d-flex justify-content-center"
            >
              <Card.Text>
                <h4>Users</h4>
                <span>1</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg="3" className="justify-content-md-center">
          <Card style={{ width: "18rem", height: "200px" }}>
            <Card.Body
              style={{ backgroundColor: "#7e5ec3" }}
              className="align-items-center d-flex justify-content-center"
            >
              <Card.Text>
                <h4>Engineers</h4>
                <span>1</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg="3" className="justify-content-md-center">
          <Card style={{ width: "18rem", height: "200px" }}>
            <Card.Body
              style={{ backgroundColor: "#fb7a41" }}
              className="align-items-center d-flex justify-content-center"
            >
              <Card.Text>
                <h4>Complaints</h4>
                <span>10</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="3" className="justify-content-md-center">
          <Card style={{ width: "18rem", height: "200px" }}>
            <Card.Body
              style={{ backgroundColor: "#2990dd" }}
              className="align-items-center d-flex justify-content-center"
            >
              <Card.Text>
                <h4>Complaints Forwarded</h4>
                <span>2</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
