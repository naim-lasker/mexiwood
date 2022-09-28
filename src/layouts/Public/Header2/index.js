import React, { useEffect, useRef, useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Col, Row } from 'react-bootstrap';
import fb from '../../../images/svg/facebook.svg'
import insta from '../../../images/svg/insta.svg'
import twitter from '../../../images/svg/twitter.svg'
import logo from '../../../images/svg/logo.svg'
import { useLocation } from 'react-router-dom';
import {  AiFillInstagram,AiFillYoutube,AiFillLinkedin} from 'react-icons/ai';


const Header2 = () => {


    const vidRef = useRef();
    useEffect(() => { vidRef.current.play(); }, []);
    const location = useLocation(); // once ready it returns the 'window.location' object
    const [url, setUrl] = useState(null);
    useEffect(() => {
      setUrl(location.pathname);
    }, [location]);


    return (

        <Navbar className='navbar-custom2'>
            <div className="video">
                <video ref={vidRef} autoPlay muted loop playsInline>
                    <source src="https://mexiwood.mx/images/videos/plywood-vid-3.mp4" type="video/mp4"></source>
                </video>
            </div>
            <div className='overlay'></div>
            <Row className='w-100 justify-content-between content header2'>
                <Col xs={3} lg={6}>
                    <Navbar.Brand href="/">
                        <img className='logo' src={logo}></img>
                    </Navbar.Brand>

                </Col>
                <Col xs={3} lg={6} className="d-flex flex-column align-items-end justify-content-center">
                    <ul className="navbar-nav sm-icons">
                        <a className='icons'>
                            <AiFillYoutube className="icon"/>
                        </a>
                        <a className='icons'>
                            <AiFillInstagram className="icon"/>
                        </a>
                        <a className='icons'>
                            <AiFillLinkedin className="icon"/>
                        </a>
                    </ul>
                </Col>
                <Col xs={12} lg={12} className="expan w-100">
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div className='link-content2 w-100 d-flex flex-column align-items-center justify-content-center'>
                            <Nav className="me-auto">

                            <Nav.Link className={(url === "/" ?" active" : "")} href="/">Home</Nav.Link>
                                {/* <Nav.Link>Living</Nav.Link>
                                <Nav.Link>Furniture</Nav.Link> */}
                                <Nav.Link href="/contact" className={(url === "/contact" ?" active" : "")}>Contact</Nav.Link>
                                <Nav.Link href="/about" className={(url === "/about" ?" active" : "")}>About us</Nav.Link>
                            </Nav>
                        </div>
                    </Navbar.Collapse>

                </Col>
                {/* <Col xs={3} className="d-flex flex-column align-items-center justify-content-center">
                    <Navbar.Toggle className='ml-5 mt-2 mt-lg-2 nav-btn' aria-controls="basic-navbar-nav" />
                </Col> */}

            </Row>


        </Navbar>
    )
}

export default Header2
