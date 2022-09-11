import React, { useState, useEffect } from 'react'
import Slider from "react-slick"
import { FaArrowCircleRight, FaArrowLeft, FaArrowRight, FaBeer } from 'react-icons/fa';

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Col, Container, Row } from 'react-bootstrap'
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { slidesData } from '../../../enums/slider'



const Details = (props) => {
    const singleItem = props.location.state
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);
    const [currentColor, setCurrentColor] = useState('cream');
    const [colorId, setColorId] = useState(1);

    useEffect(() => {
        setNav1(slider1);
        setNav2(slider2);
    })

    const settingsMain = {
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        arrows: false,
    }

    const settingsThumbs = {
        slidesToShow: 4,
        infinite: true,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        centerMode: true,
        swipeToSlide: true,
        focusOnSelect: true,
        centerPadding: '0px',
        arrows: false,
    }

    const checkPrev = () => {
        if (colorId < 2) {
            setColorId(slidesData.length)
        }
        setColorId(id => id - 1)

        slider1.slickPrev();
    }

    const checkNext = () => {
        setColorId(id => id + 1)
        if (colorId == slidesData.length) {
            setColorId(1)
        }

        slider1.slickNext();

    }

    const resetColor = (id) => {
        setColorId(id)
    }

    const testImage = color => {
        if (color == 'cream') {
            setCurrentColor('cream')
        } else if (color == 'gray') {
            setCurrentColor('gray')
        } else {
            if (color == 'white') {
                setCurrentColor('white')
            }
        }
    }
    const [activeId, setActiveId] = useState("1");

    function toggleActive(id) {
        if (activeId === id) {
            setActiveId(null);
        } else {
            setActiveId(id);
        }
    }

    return (

        <div className="App">
            <Container fluid className='pt-5'>
                <Row>
                    <Col xs={12} className="mx-auto text-center py-4">
                    <h2 >{singleItem.catagory}</h2>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="slider-wrapper">

                            {/* <button className='custom-prev' onClick={checkPrev}><FaArrowLeft size={30} /></button>
                <button className='custom-next' onClick={checkNext}><FaArrowRight size={30} /></button> */}

                            <Slider
                                {...settingsMain}
                                asNavFor={nav2}
                                ref={slider => (setSlider1(slider))}
                            >
                                {slidesData.map((slide) => {

                                    return (
                                        <div className="slick-slide" key={slide.id}>
                                            <img className="slick-slide-image img-fluid"
                                                src={require(`../../../images/soho_36/angle${colorId == 1 ? 1 : colorId == 2 ? 2 : colorId == 3 ? 3 : colorId}_${currentColor}.jpg`)} />
                                        </div>
                                    )
                                }
                                )}
                            </Slider>

                            <div className="thumbnail-slider-wrap">
                                <Slider
                                    {...settingsThumbs}
                                    asNavFor={nav1}
                                    ref={slider => (setSlider2(slider))}>

                                    {slidesData.map((slide) =>

                                        <div className="slick-slide" key={slide.id}>
                                            <img onClick={() => resetColor(slide.id)} className="slick-slide-image img-fluid"
                                                src={require(`../../../images/soho_36/angle${slide.id}_${currentColor}.jpg`)} />
                                        </div>

                                    )}

                                </Slider>
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} md={6} className="mt-4 mt-md-0">
                        <Row>
                            <Col>
                                <img className="slick-slide-image img-fluid" onClick={() => testImage('cream')} src={require(`../../../images/colors/img1.jpg`)} />
                            </Col>
                            <Col>
                                <img className="slick-slide-image img-fluid" onClick={() => testImage('gray')} src={require(`../../../images/colors/img2.jpg`)} />
                            </Col>
                            <Col>
                                <img className="slick-slide-image img-fluid" onClick={() => testImage('white')} src={require(`../../../images/colors/img3.jpg`)} />
                            </Col>

                        </Row>
                        <Row>
                            <Col className='list'>
                                <ul className='pt-5 '>

                                    <li>Light Gray Finish</li>

                                    <li>Brushed nickel finish hardware</li>

                                    <li>2 soft-close doors</li>

                                    <li>Natural 1 in.carrara white marble countertop and backsplash</li>

                                    <li>Top pre-drilled for 8 in. Widespread faucet</li>

                                    <li>White vitreous china rectangular undermount sink</li>

                                    <li>Adjustable height levelers</li>

                                    <li>Faucet not included</li>

                                    <li>Hardware color: Brushed Nickel</li>

                                    <li>Primary Wood: Poplar and Secondary Wood:MDF</li>

                                    <li>Shape:Rectangular</li>

                                    <li>Number of Doors:2</li>

                                    <li>Number of Shelves:1</li>

                                    <li>Vanity Cabinet Size:37-Inch</li>

                                    <li>Vanity Top Color:White</li>

                                    <li>Vanity Top Material:Carrara White marble</li>

                                    <li>Vanity Top Thickness: 1-Inch</li>

                                    <li>Vanity Top Edge Type: Startight</li>

                                    <li>Number of Sink: 1</li>

                                    <li>Sink Basin Depth:6.3-Inch</li>

                                    <li>Sink Basin Width: 13-Inch</li>

                                    <li>Sink Basin Length: 18. 1-Inch</li>

                                    <li>Sink Type: Undermount</li>

                                    <li>Assembly Required</li>
                                </ul>


                                <Accordion defaultActiveKey={activeId} className="pt-5">
                                    <Card className="rounded-lg mb-3 border-0">
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            onClick={() => toggleActive("0")}
                                            className={activeId === "0" ? "active title" : 'title'}
                                        >
                                            Specifications
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <p className="text-muted">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                    sed do eiusmod tempor incididunt ut labore et dolore magna
                                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                    ullamco laboris nisi ut aliquip
                                                </p>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card className="rounded-lg mb-3 border-0">
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="1"
                                            onClick={() => toggleActive("1")}
                                            className={activeId === "1" ? "active title" : 'title'}
                                        >
                                            Disclaimers
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>
                                                <p className="text-muted">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                    sed do eiusmod tempor incididunt ut labore et dolore magna
                                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                    ullamco laboris nisi ut aliquip
                                                </p>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card className="rounded-lg mb-3 border-0">
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="2"
                                            onClick={() => toggleActive("2")}
                                            className={activeId === "2" ? "active title" : 'title'}
                                        >
                                            Resources
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="2">
                                            <Card.Body>
                                                <p className="text-muted">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                    sed do eiusmod tempor incididunt ut labore et dolore magna
                                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                    ullamco laboris nisi ut aliquip
                                                </p>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card className="rounded-lg mb-3 border-0">
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="3"
                                            onClick={() => toggleActive("3")}
                                            className={activeId === "3" ? "active title" : 'title'}
                                        >
                                            Shipping and Returns
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="3">
                                            <Card.Body>
                                                <p className="text-muted">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                    sed do eiusmod tempor incididunt ut labore et dolore magna
                                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                    ullamco laboris nisi ut aliquip
                                                </p>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card className="rounded-lg mb-3 border-0">
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="4"
                                            onClick={() => toggleActive("4")}
                                            className={activeId === "4" ? "active title" : 'title'}
                                        >
                                            Reviews
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="4">
                                            <Card.Body>
                                                <p className="text-muted">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                    sed do eiusmod tempor incididunt ut labore et dolore magna
                                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                    ullamco laboris nisi ut aliquip
                                                </p>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card className="rounded-lg mb-3 border-0">
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="5"
                                            onClick={() => toggleActive("5")}
                                            className={activeId === "5" ? "active title" : 'title'}
                                        >
                                            Q & A
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="5">
                                            <Card.Body>
                                                <p className="text-muted">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                    sed do eiusmod tempor incididunt ut labore et dolore magna
                                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                    ullamco laboris nisi ut aliquip
                                                </p>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default Details
