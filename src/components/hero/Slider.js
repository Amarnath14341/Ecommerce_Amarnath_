import React from "react";
import "./slider.css";
import { slide } from "../../assets/data/data";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Slider = () => {
  return (
    <>
      <Container className="Slide">
        <Row>
          {slide.map((item, i) => (
            <Col lg={3} md={6} sm={12}>
              <div className="box" key={i}>
                <div>
                  <img className="slideimg" src={item.image} alt="" />
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Slider;
