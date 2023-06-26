import React, { useState } from 'react'
import { furnitureItems } from '../../../enums/home';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Col, Container, Modal, Row } from 'react-bootstrap'
import SingleHomeItem from '../../../components/Public/singleHome'


const Home = () => {
    const [modalShow, setModalShow] = useState(true)

    return (
        <section className='home-main'>
            <h2 className='title2'>Bathroom Vanities</h2>
            <Row>
                {furnitureItems.map((item, i) => {
                    return <Col key={i} lg={6}>
                        <SingleHomeItem
                            imgType={item.imgType}
                            imgName={item.catagory}
                            item={item}
                        />
                    </Col>
                })}
            </Row>

            <Modal
                show={modalShow}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="bg-dark rounded home-modal"
            >
                <Modal.Body className='my-3 p-0 p-md-3'>
                    <Container className='d-flex flex-column justify-content-between h-100'>
                        <Row className='flex-grow-1'>
                            <Col sm={12} lg={6} className='d-flex flex-column text-center mb-md-0 mb-3'>
                                <div className="img-wrapper">
                                    <img className="vanity-kitchen-img w-100" src='/img/vanity.png' />
                                </div>
                                <button
                                    className='mt-2 mt-md-4 text-white border-0 rounded-lg cursor-pointer w-100 bg-dark'
                                    onClick={() => setModalShow(false)}>
                                    Vanities
                                </button>
                            </Col>
                            <Col sm={12} lg={6} className='d-flex flex-column text-center'>
                                <div className="img-wrapper">
                                    <img className="vanity-kitchen-img w-100" src='/img/cabinet.png' />
                                </div>
                                <a
                                    className='kitchen-btn d-block mt-2 mt-md-4 text-white border-0 rounded-lg cursor-pointer w-100'
                                    href='https://ezclickcabinets.netlify.app'>
                                    Kitchen
                                </a>
                            </Col>

                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </section>
    )
}

export default Home
