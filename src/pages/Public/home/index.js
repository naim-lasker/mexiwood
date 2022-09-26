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
import SingleHomeItem from '../../../components/Public/singleHome';



const Home = () => {

    return (
        <>
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
        </>
    )
}

export default Home
