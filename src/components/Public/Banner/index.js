import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';

const BannerAboutUs = ({title, desc, waterMark}) => {

    return (
            <div className="bg-img">
                <Container>
                    <Row>
                        <Col className='hearderset'>
                            <h1>{title}</h1>
                            <p>{desc}</p>
                            <span className='watermark'>{waterMark}</span>
                        </Col>
                    </Row>
                </Container>
            </div>
    )
}

export default BannerAboutUs
