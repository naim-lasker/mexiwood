import React, { useEffect, useRef } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Col, Row } from 'react-bootstrap';
import fb from '../../../images/svg/facebook.svg'
import insta from '../../../images/svg/insta.svg'
import twitter from '../../../images/svg/twitter.svg'
import logo from '../../../images/svg/logo.svg'

const Header2 = () => {


    const vidRef = useRef();
    useEffect(() => { vidRef.current.play(); }, []);


    return (

        <Navbar expand="lg" className='navbar-custom2'>
            <div className="video">
                <video ref={vidRef} autoPlay muted loop>
                    <source src="https://mexiwood.mx/images/videos/plywood-vid-3.mp4" type="video/mp4"></source>
                </video>
            </div>
            <div className='overlay'></div>
            <Row className='w-100 justify-content-between content header2'>
                <Col xs={3} lg={6}>
                    <Navbar.Brand href="/">
                        <img style={{ width: 200, height: 120 }} src={logo}></img>
                    </Navbar.Brand>

                </Col>
                <Col xs={3} lg={6} className="d-flex flex-column align-items-end justify-content-center">
                    <ul className="navbar-nav sm-icons">
                        <div className='icons'>
                            <img src={fb} />
                        </div>
                        <div className='icons'>
                            <img src={insta} />
                        </div>
                        <div className='icons'>
                            <img src={twitter} />
                        </div>
                    </ul>
                </Col>
                <Col xs={3} lg={12}>
                    <div className='link-content2 d-flex flex-column align-items-center justify-content-center'>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">

                                <Nav.Link href="/">Home</Nav.Link>
                                {/* <Nav.Link>Living</Nav.Link>
                                <Nav.Link>Furniture</Nav.Link> */}
                                <Nav.Link href="/contact">Contact</Nav.Link>
                                <Nav.Link href="/about">About us</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>

                </Col>
                <Col xs={3} className="d-flex flex-column align-items-center justify-content-center">
                    <Navbar.Toggle className='ml-5 mt-2 mt-lg-2 nav-btn' aria-controls="basic-navbar-nav" />
                </Col>
                
            </Row>


        </Navbar>
    )
}

export default Header2
