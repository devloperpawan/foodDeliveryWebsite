import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Burger from "../../assets/hero/hero-2.png"
import { Link } from 'react-router-dom'

const Sections1 = () => {
  return (
    <section className='hero_section'>
    <Container>
    <Row>
        <Col lg={7} className='mb-5 mb-lg-0'>
            <div className="position-relative">
            <img src={Burger} className="img-fluid" style={{height: "550px"}} alt="Hero" />
            </div>
            <div className="price_badge">
                <div className="badge_text">
                    <h4 className="h4_XS">Only</h4>
                    <h4 className="h3_LG">$6.99</h4>
                </div>
            </div>
        </Col>
        <Col lg={5}>
        <div className="hero_text text-center">
            <h1 className='text-white'>New Burger</h1>
            <h2 className='text-white'>With onion</h2>
            <p className='text-white pt-2 pb-4'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas dolores nihil blanditiis ab eius, totam dolorem maxime debitis .
            </p>
            <Link to="/" className='btn order_now'>
            Order Now
            </Link>
        </div>
        </Col>
    </Row>
    </Container>
    </section>
  )
}

export default Sections1
