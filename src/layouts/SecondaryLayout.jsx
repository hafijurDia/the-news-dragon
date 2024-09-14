import React from "react";
import Header from "../pages/Shared/Header/Header";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";
import { Col, Container, Row } from "react-bootstrap";
import Rightnav from "../pages/Shared/Rightnav/Rightnav";
import { Outlet } from "react-router-dom";

const SecondaryLayout = () => {
  return (
    <>
      <Header></Header>
      <NavigationBar></NavigationBar>
      <Container>
        <Row>
          <Col lg={9}>
            <Outlet></Outlet>
          </Col>
          <Col lg={3}>
            <Rightnav></Rightnav>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SecondaryLayout;
