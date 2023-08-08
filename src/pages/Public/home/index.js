import React from 'react';
import { furnitureItems } from '../../../enums/home';
import "slick-carousel/slick/slick-theme.css";
import { Col, Row } from 'react-bootstrap';
import SingleHomeItem from '../../../components/Public/singleHome';

const Home = () => {

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
        </section>
    );
}

export default Home;
