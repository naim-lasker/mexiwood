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
                    <Col xs={4} lg={6} className="d-flex flex-column align-items-start text-start">
                        <Navbar.Brand href="/">
                            <Link to={{
                                pathname: "/",
                            }}>
                                <h2>Logo</h2>
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">

                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link>Living</Nav.Link>
                                <Nav.Link>Furniture</Nav.Link>
                                <Nav.Link href="/contact">Contact</Nav.Link>
                                <Nav.Link href="/about">About us</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Col>
                    <Col xs={4} lg={6} className="d-flex flex-column align-items-end text-end">
                        <form class="form-inline inputs mt-2 mt-lg-2 ">
                            <input className=" form-control mr-sm-2" type="search" placeholder="Search here" aria-label="Search"></input>
                        </form>
                        <div class="header-right row mt-3 d-none d-lg-flex">
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
