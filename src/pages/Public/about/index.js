import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import BannerAboutUs from '../../../components/Public/Banner';



const About = () => {

 
    return (
        <>
          <BannerAboutUs
                title="About Us"
                desc="We’re on a mission to deliver engaging, curated furniture at a reasonable price."
                waterMark="About us"
            />
        </>
    )
}

export default About
