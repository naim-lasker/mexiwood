import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';
import BannerAboutUs from '../../../components/Public/Banner';




const Contact = () => {

    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };

    return (
        < div className='touch-content'>
            <BannerAboutUs
                title="Have Question - Contact us"
                desc="Excepteur Sint Occaecat Cupidatat Non Proident, Sunt In Coulpa Qui Offical
                    Modeserunt Mollit Anim Id Est Laborum 20 Years Experience."
                waterMark="Contact"
            />

            <div class="container ">

                <div class="row mt-5 py-5">

                    <div class="col-12 col-md-6 bg">

                        <div class="page-title">

                            <h1>Get in touch</h1>

                            <p>Objectively innovate your empowered manufactured
                                products whereas parallel platforms for your ideas.</p>

                        </div>


                        <div class="row page-content">
                            <img src={require('../../../images/1.png')}></img>
                            <p className='mb-0'>Ta-134/A, Gulshan Badda
                                Link Rd, Dhaka</p>
                        </div>




                        <div class="row page-content">

                            <img src={require('../../../images/5.png')}></img>

                            <div>
                                <p className='mb-0'>(+088) 589-8745</p>
                                <p className='mb-0'> (+088) 222-9999</p>
                            </div>


                        </div>



                        <div class="row page-content">

                            <img src={require('../../../images/6.png')}></img>
                            <div>
                                <p className='mb-0'>support@rstheme.com</p>
                                <p className='mb-0'> info@codesless.com</p>
                            </div>
                        </div>
                    </div>




                    <div class="col-12 col-md-6 mt-5 mt-md-0">

                        <div style={{ height: '80vh', width: '100%' }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: "" }}
                                defaultCenter={defaultProps.center}
                                defaultZoom={defaultProps.zoom}
                            >
                            </GoogleMapReact>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Contact
