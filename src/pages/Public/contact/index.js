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
            <div className="container ">

                <div className="row py-5">
                    <div className="col-12">
                        <h2 className='title2'>Get in touch</h2>
                    </div>

                    <div className="col-12 col-md-6 ">
                        <div className='bg'>
                            <img className='bg-img' src={require('../../../images/svg/contact.svg')} />
                            <div className="c-content">
                                <div className="page-title">
                                    <p>Objectively innovate your empowered manufactured
                                        products whereas parallel platforms for your ideas.</p>
                                </div>
                                <div className="row page-content">
                                    <div className='info'>
                                        <img src={require('../../../images/svg/loc.svg')}></img>
                                    </div>
                                    <p className='mb-0'>Ta-134/A, Gulshan Badda
                                        Link Rd, Dhaka</p>
                                </div>
                                <div className="row page-content">
                                    <div className='info'>
                                        <img src={require('../../../images/svg/ph.svg')}></img>
                                    </div>
                                    <div>
                                        <p className='mb-0'>(+088) 589-8745</p>
                                        <p className='mb-0'> (+088) 222-9999</p>
                                    </div>
                                </div>
                                <div className="row page-content">
                                    <div className='info'>
                                        <img src={require('../../../images/svg/Email.svg')}></img>
                                    </div>
                                    <div>
                                        <p className='mb-0'>support@rstheme.com</p>
                                        <p className='mb-0'> info@codesless.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className='overlay'></div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 contact-form mt-5 mt-md-0">
                        <form id="contact-form" method="POST">
                            <div className="form-group d-flex align-item-center justify-content-between mb-0">
                                <input placeholder='FirstName' type="text" className="form-control mr-3" />
                                <input placeholder='LastName' type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder='Email address' className="form-control" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" placeholder='Message' rows="5" />
                            </div>
                        </form>
                        <button type="submit" className="btn btn-send">SEND</button>
                    </div>




                    <div className="col-12 col-md-12 mt-5 mt-lg-0">

                        <div style={{ height: '365px', width: '100%' }}>
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
