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
            >
                <Modal.Body className='mt-4'>
                    <Container>
                        <Row className='align-items-stretch'>
                            <Col lg={7} className='text-center mb-md-0 mb-5'>
                                <img className="img-fluid vanity-kitchen-img w-100" src='/img/vanity.png' />
                                <button
                                    className='mt-4 text-white border-0 rounded-lg cursor-pointer w-100 bg-vanity'
                                    onClick={() => setModalShow(false)}>
                                    Vanities
                                </button>
                            </Col>
                            <Col lg={5} className='text-center'>
                                <img className="img-fluid vanity-kitchen-img w-100" src='/img/cabinet.png' />
                                <a
                                    className='kitchen-btn d-block mt-4 text-white border-0 rounded-lg cursor-pointer w-100'
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
