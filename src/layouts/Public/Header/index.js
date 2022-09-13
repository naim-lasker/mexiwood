import React from 'react'
import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { SiTiktok } from 'react-icons/si';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Col, Row } from 'react-bootstrap';

const Header = () => {
    return (

        <Navbar style={{backgroundColor:'rgb(247, 247, 247)'}} expand="lg">
            <Container>
                <Row className='w-100 justify-content-between'>
                    <Col xs={4} lg={6} className="d-flex flex-column align-items-start justify-content-between text-center">
                        <Navbar.Brand href="/">
                            <img style={{width:100}} src='/img/logo2.png'></img>
                        </Navbar.Brand>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">

                                <Nav.Link href="/">Home</Nav.Link>
                                {/* <Nav.Link>Living</Nav.Link>
                                <Nav.Link>Furniture</Nav.Link> */}
                                <Nav.Link href="/contact">Contact</Nav.Link>
                                <Nav.Link href="/about">About us</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Col>
                    <Col xs={4} lg={6} className="d-flex flex-column align-items-end justify-content-between text-end">
                        {/* <form className="form-inline   "> */}
                            <input className="form-control inputs mt-4 mt-lg-2" type="search" placeholder="Search here" aria-label="Search"></input>
                        {/* </form> */}
                        <div className="header-right row mt-3 d-none d-lg-flex">
                            <h3>Follow us -</h3>
                            <ul className="navbar-nav sm-icons">
                                <div className="nav-link"><AiFillFacebook size={20} /></div>
                                <div className="nav-link"><AiOutlineTwitter size={20} /></div>
                                <div className="nav-link"><AiFillInstagram size={20} /></div>
                                <div className="nav-link"><SiTiktok size={20} /></div>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={4}>
                        <Navbar.Toggle className='ml-5 mt-2 mt-lg-2' aria-controls="basic-navbar-nav" />
                    </Col>
                </Row>
            </Container>
        </Navbar>
    )
}

export default Header
