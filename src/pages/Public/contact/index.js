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
        <>
            <BannerAboutUs
                title="Have Question - Contact us"
                desc="Excepteur Sint Occaecat Cupidatat Non Proident, Sunt In Coulpa Qui Offical
                    Modeserunt Mollit Anim Id Est Laborum 20 Years Experience."
                waterMark="Contact"
            />

            <div class="container">

                <div class="row touch-content">

                    <div class="col-md-6 touch-content-title bg-white" height="400px" width="500px">

                        <div class="page-title">

                            <h1>Get in touch</h1>

                            <p>Objectively innovate your empowered manufactured
                                products whereas parallel platforms for your ideas.</p>

                        </div>


                        <div class="row page-content">

                            <a href=""><i class=" fa fa-location-pin"></i></a>


                            <p>Ta-134/A, Gulshan Badda

                                Link Rd, Dhaka</p>


                        </div>




                        <div class="row page-content">

                            <a href=""><i class="fa fa-mobile"></i></a>


                            <p>(+088) 589-8745

                                (+088) 222-9999</p>


                        </div>



                        <div class="row page-content">

                            <a href=""><i class="fa fa-envelope"></i></a>

                            <p>support@rstheme.com

                                info@codesless.com</p>

                        </div>


                        <div class="row page-content">

                            <a href=""><i class="fa fa-phone-rotary"></i></a>

                            <p>+1245201396

                                +2245201396</p>

                        </div>


                    </div>




                    <div class="col-md-6 touch-img">

                        <div style={{ height: '50vh', width: '100%' }}>
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

        </>
    )
}

export default Contact
