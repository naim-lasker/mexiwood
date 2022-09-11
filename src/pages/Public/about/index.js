import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import BannerAboutUs from '../../../components/Public/Banner';
import { PrimaryButton } from '../../../components/UI/Button';



const About = () => {


    return (
        <>
            <BannerAboutUs
                title="About Us"
                desc="We’re on a mission to deliver engaging, curated furniture at a reasonable price."
                waterMark="About us"
            />

            <Container className='pt-5 mt-5 mb-5 pb-5 about'>
                <div className="row justify-between items-center">
                    <div className="col-12 col-lg-6 pr-0 pr-md-50 sm:pr-15">
                        <div className="composition">
                            <div><img src="/img/furniture-3.jpg" alt="image"></img></div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 mt-5 mt-lg-0">
                        <h2 className="text-30 lh-16">Welcome to Educrat Enhance your skills with best Online courses</h2>
                        <p className="text-dark-1 mt-30">You can start and finish one of these popular courses in under a day – for free! Check out the list below.. Take the course for free</p>
                        <p className=" mt-25">Neque convallis a cras semper auctor. Libero id faucibus nisl tincidunt egetnvallis a cras semper auctonvallis a cras semper aucto. Neque convallis a cras semper auctor. Liberoe convallis a cras semper atincidunt egetnval</p>
                        <PrimaryButton text="Let's Explore"/>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default About
