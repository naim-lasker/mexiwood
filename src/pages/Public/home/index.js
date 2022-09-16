import React, { useEffect, useRef, useState } from 'react'
import { furnitureItems } from '../../../enums/home';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Col, Container, Row } from 'react-bootstrap'
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { slidesData } from '../../../enums/slider'
import { Popover, PopoverBody } from 'reactstrap';
import { AiOutlineLeft, AiOutlineRight, AiOutlinePlus } from 'react-icons/ai';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';



const Home = () => {


    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        slidesToShow: 5,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);
    const [currentColor, setCurrentColor] = useState('cream');
    const [colorId, setColorId] = useState(1);
    const [navTop, setNavTop] = useState(null);
    const [sliderTop, setSliderTop] = useState(null);

    useEffect(() => {
        setNav1(slider1);
        setNav2(slider2);
        setNavTop(sliderTop)
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
        nextArrow: <SampleNextArrow2 />,
        prevArrow: <SamplePrevArrow2 />,
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
    const checkPrevTop = () => {
        sliderTop.slickPrev();
    }

    const checkNextTop = () => {
        sliderTop.slickNext();
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
    const [activeId, setActiveId] = useState("0");

    function toggleActive(id) {
        if (activeId === id) {
            setActiveId(null);
        } else {
            setActiveId(id);
        }
    }
    const onHover = () => {
        setOpen(true)
    }
    const onHoverLeave = () => {
        setOpen(false)
    }
    const onHover2 = () => {
        setOpen2(true)
    }
    const onHoverLeave2 = () => {
        setOpen2(false)
    }
    const onHover3 = () => {
        setOpen3(true)
    }
    const onHoverLeave3 = () => {
        setOpen3(false)
    }

    function SampleNextArrow(props) {
        return (
            <div className='top-next' onClick={checkNextTop}><AiOutlineRight color='black' size={30} /></div>
        );
    }

    function SamplePrevArrow(props) {
        return (
            <div className='top-prev' onClick={checkPrevTop}><AiOutlineLeft color='black' size={30} /></div>
        );
    }
    function SampleNextArrow2(props) {
        return (
            <div className='top-next2' onClick={checkNext}><AiOutlineRight color='black' size={30} /></div>
        );
    }

    function SamplePrevArrow2(props) {
        return (
            <div className='top-prev2' onClick={checkPrev}><AiOutlineLeft color='black' size={30} /></div>
        );
    }

    return (
        <>



            <section className='home-main'>
                <h2 className='title2'>Bathroom Vanities</h2>
                <div >
                    <Slider className='main-carousel' {...settings} asNavFor={navTop}
                        ref={slider => (setSliderTop(slider))} >

                        {furnitureItems.length > 0 && furnitureItems.map((item, i) =>
                            <div className='d-flex align-items-center flex-column'>
                                <div className="top-carousel mb-4" key={i}>
                                    <img className="furniture-img" src={item.img}></img>
                                </div>
                                <p className="furniture-text">{item.catagory}</p>
                            </div>
                        )}
                    </Slider>
                </div>
                <Row>
                    <Col xs={12} md={6} className="mx-auto">
                        <div className="slider-wrapper d-flex flex-column align-items-center">
                            <Slider
                                {...settingsMain}
                                asNavFor={nav2}
                                ref={slider => (setSlider1(slider))}
                            >
                                {slidesData.map((slide) => {

                                    return (
                                        <div className="slick-slide main" key={slide.id}>
                                            <img className="slick-slide-image1 img-fluid"
                                                src={require(`../../../images/soho_36/angle${colorId == 1 ? 1 : colorId == 2 ? 2 : colorId == 3 ? 3 : colorId}_${currentColor}.jpg`)} />
                                        </div>
                                    )
                                }
                                )}
                            </Slider>

                            <div className="thumbnail-slider-wrap mt-2 sec-carousel">
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

                    <Col xs={12} md={6} className="mt-4 mt-md-0 color-item">

                        <div className='list'>
                            <h2>Langmore 60</h2>
                            <ul className='pt-2'>

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
                            </ul>

                        </div>
                        <Row className='pl-2 circle'>
                            <Col xs={12}>
                                <h4>Finish Options</h4>
                            </Col>
                            <Col xs={12}>
                                <img id="Popover1" onMouseEnter={onHover} onMouseLeave={onHoverLeave} className="slick-slide-image4" onClick={() => testImage('cream')} src={require(`../../../images/svg/ven/circle1.svg`)} />
                                <img id="Popover2" className="slick-slide-image4" onMouseEnter={onHover2} onMouseLeave={onHoverLeave2} onClick={() => testImage('gray')} src={require(`../../../images/svg/ven/circle2.svg`)} />
                                <img id="Popover3" className="slick-slide-image4" onMouseEnter={onHover3} onMouseLeave={onHoverLeave3} onClick={() => testImage('white')} src={require(`../../../images/svg/ven/circle3.png`)} />
                            </Col>

                        </Row>

                        <Row className='w-100'>
                            <Col xs={12}>
                                <Accordion defaultActiveKey={activeId} className="pt-5 pb-5 mb-5">
                                    <Card className="rounded-lg border-0">
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            onClick={() => toggleActive("0")}
                                            className={activeId === "0" ? "active title" : 'title'}
                                        >
                                            <div className='d-flex align-items-center justify-content-between'>
                                                <h4>Details</h4>
                                                <AiOutlinePlus size={20} />
                                            </div>
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
                                    <Card className="rounded-lg border-0">
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="1"
                                            onClick={() => toggleActive("1")}
                                            className={activeId === "1" ? "active title" : 'title'}
                                        >
                                            <div className='d-flex align-items-center justify-content-between'>
                                                <h4>Dimensions</h4>
                                                <AiOutlinePlus size={20} />
                                            </div>
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
                                    <Card className="rounded-lg border-0">
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="2"
                                            onClick={() => toggleActive("2")}
                                            className={activeId === "2" ? "active title" : 'title'}
                                        >
                                            <div className='d-flex align-items-center justify-content-between'>
                                                <h4>Specifications</h4>
                                                <AiOutlinePlus size={20} />
                                            </div>
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
                                    <Card className="rounded-lg border-0">
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="3"
                                            onClick={() => toggleActive("3")}
                                            className={activeId === "3" ? "active title" : 'title'}
                                        >
                                            <div className='d-flex align-items-center justify-content-between'>
                                                <h4>Shipping and Returns</h4>
                                                <AiOutlinePlus size={20} />
                                            </div>
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
                                </Accordion>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default Home
