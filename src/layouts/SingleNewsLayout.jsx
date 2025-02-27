import React from "react";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";

import Rightnav from "../pages/Shared/Rightnav/Rightnav";
import { Outlet } from "react-router-dom";

const SingleNewsLayout = () => {
  return (
    <>
      <Header></Header>
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
      <Footer></Footer>
    </>
  );
};

export default SingleNewsLayout;
