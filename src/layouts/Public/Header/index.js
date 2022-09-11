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

        <Navbar bg="light" expand="lg">
            <Container>
                <Row className='w-100 justify-content-between'>
                    <Col xs={4} lg={6}>
                        <Navbar.Brand href="#home">
                            <Link to={{
                                pathname: "/",
                            }}>
                                <a class="navbar-brand"><img src='/img/logo-white.png'></img></a>
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Link className='link' to={{
                                    pathname: "/",
                                }}>
                                    <Nav.Link href="#home">Home</Nav.Link>
                                </Link>
                                <Nav.Link href="#link">Living</Nav.Link>
                                <Nav.Link href="#link">Furniture</Nav.Link>
                                <Link className='link' to={{
                                    pathname: "/contact",
                                }}>
                                    <Nav.Link href="#link">Contact</Nav.Link>
                                </Link>
                                <Link className='link' to={{
                                    pathname: "/about",
                                }}>
                                    <Nav.Link href="#link">About us</Nav.Link>
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Col>
                    <Col xs={4} lg={6} className="ml-auto text-end">
                        <form class="form-inline inputs mt-2 mt-lg-4 ">
                            <input className=" form-control mr-sm-2" type="search" placeholder="Search here" aria-label="Search"></input>
                        </form>
                        <div class="header-right row mt-5 d-none d-lg-flex">
                            <h3>Follow us -</h3>
                            <ul class="navbar-nav sm-icons">
                                <a class="nav-link" href=""><AiFillFacebook size={20} /></a>
                                <a class="nav-link" href=""><AiOutlineTwitter size={20} /></a>
                                <a class="nav-link" href=""><AiFillInstagram size={20} /></a>
                                <a class="nav-link" href=""><SiTiktok size={20} /></a>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={4}>
                        <Navbar.Toggle className='ml-5' aria-controls="basic-navbar-nav" />
                    </Col>
                </Row>
            </Container>
        </Navbar>
    )
}

export default Header
