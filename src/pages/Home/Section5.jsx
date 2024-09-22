import React from 'react'
import {Carousel, Col, Container, Row} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import storeIOS from '../../assets/shop/appstore.png'
import StoreGoogle from '../../assets/shop/googleplay.png'
import CallImages from '../../assets/shop/e-shop.png'
import BrandImage1 from '../../assets/brands/brand-11.png'
import BrandImage2 from '../../assets/brands/brand-12.png'
import BrandImage3 from '../../assets/brands/brand-13.png'
import BrandImage4 from '../../assets/brands/brand-14.png'
import BrandImage5 from '../../assets/brands/brand-15.png'
import BrandImage6 from '../../assets/brands/brand-16.png'
import BrandImage7 from '../../assets/brands/brand-17.png'
import BrandImage8 from '../../assets/brands/brand-18.png'
const Section5 = () => {
  return (
    <div>
      <section className='shop_section'>
      <Container>
      <Row className='align-items-center'>
            <Col lg={6} className='text-center text-lg-start mb-5 mb-lg-0'>
            <h4>Download mobile App and</h4>
            <h2>save up to 20%</h2>
            <p>
            Aliquam a augue suscipit, luctus neque purus ipsum and neque
            dolor primis libero tempus, blandit varius
            </p>
            <Link to="/">
                <img src={storeIOS} alt="IOS" className='store img-fluid me-3'/>
            </Link>
            <Link to="/">
                <img src={StoreGoogle} alt="Android" className='store img-fluid me-3'/>
            </Link>
            </Col>
            <Col lg={6}>
            <img src={CallImages} alt="e-shop" className='img-fluid' />
            </Col>
        </Row>
      </Container>
      </section>
      <section className='brand_section'>
        <Container>
            <Row>
            <Carousel>
      <Carousel.Item>
        <Carousel.Caption>
         <div className='d-flex align-items-center justify-content-between'>
            <div className="brand_img">
                <img src={BrandImage1} className='img-fluid' alt="brand-1" />
            </div>
            <div className="brand_img">
                <img src={BrandImage2} className='img-fluid' alt="brand-2" />
            </div>
            <div className="brand_img">
                <img src={BrandImage3} className='img-fluid' alt="brand-3" />
            </div>
            <div className="brand_img">
                <img src={BrandImage4} className='img-fluid' alt="brand-4" />
            </div>
            <div className="brand_img">
                <img src={BrandImage5} className='img-fluid' alt="brand-5" />
            </div>
         </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
         <div className='d-flex align-items-center justify-content-between'>
            <div className="brand_img">
                <img src={BrandImage7} className='img-fluid' alt="brand-7" />
            </div>
            <div className="brand_img">
                <img src={BrandImage8} className='img-fluid' alt="brand-8" />
            </div>
            <div className="brand_img">
                <img src={BrandImage6} className='img-fluid' alt="brand-6" />
            </div>
            <div className="brand_img">
                <img src={BrandImage4} className='img-fluid' alt="brand-4" />
            </div>
            <div className="brand_img">
                <img src={BrandImage5} className='img-fluid' alt="brand-5" />
            </div>
            <div className="brand_img">
                <img src={BrandImage6} className='img-fluid' alt="brand-6" />
            </div>
         </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </Row>
        </Container>
      </section>
    </div>
  )
}

export default Section5
