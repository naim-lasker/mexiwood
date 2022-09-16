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

                    <div className="col-12 col-md-6 bg">
                        <img src={require('../../../images/svg/contact.svg')} />
                        <div className='overlay'></div>
                    </div>
                    <div className="col-12 col-md-6 bg contact-form">
                        <form id="contact-form" method="POST">
                            <div className="form-group d-flex align-item-center justify-content-between mb-0">
                                <div>
                                    <input placeholder='FirstName' type="text" className="form-control" />
                                </div>
                                <div>
                                    <input placeholder='LastName' type="text" className="form-control" />
                                </div>
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




                    <div className="col-12 col-md-12 mt-5 mt-md-0">

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
