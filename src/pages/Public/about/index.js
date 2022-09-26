import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import BannerAboutUs from '../../../components/Public/Banner';
import { PrimaryButton } from '../../../components/UI/Button';



const About = () => {


    return (
        <>
            < div className='touch-content mb-5 pb-5'>
                <div className="container">

                    <div className="row mb-0 pb-0 mb-md-5 pb-md-5">
                        <div className="col-12">
                            <h2 className='title2'>About US</h2>
                        </div>

                        <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center flex-column">
                            <div className='bg'>
                                <img className='bg-img' src={require('../../../images/svg/about.png')} />
                                <img className='right' src={require('../../../images/svg/right.svg')} />
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 d-flex justify-content-center flex-column about mt-5 mt-md-0">
                            <h2 className="">Welcome to Educrat Enhance your skills with best Online courses</h2>
                            <p className=" mt-30">You can start and finish one of these popular courses in under a day – for free! Check out the list below.. Take the course for free</p>
                            <p className=" mt-25">Neque convallis a cras semper auctor. Libero id faucibus nisl tincidunt egetnvallis a cras semper auctonvallis a cras semper aucto. Neque convallis a cras semper auctor. Liberoe convallis a cras semper atincidunt egetnval</p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default About
