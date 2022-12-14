import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react';
import ReCAPTCHA from "react-google-recaptcha";




const Contact = () => {

    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [msg, setMsg] = useState('')

    const submit = () => {
        // console.log('hii');
    }

    return (
        < div className='touch-content'>
            <div className="container ">

                <div className="row">
                    <div className="col-12">
                        <h2 className='title2'>Get in touch</h2>
                    </div>

                    <div className="col-12 col-md-5 ">
                        <div className='bg'>
                            <img className='bg-img' src={require('../../../images/svg/contact.svg')} />
                            <div className="c-content d-flex justify-content-center">
                                {/* <div className="page-title">
                                    <p>Objectively innovate your empowered manufactured
                                        products whereas parallel platforms for your ideas.</p>
                                </div> */}
                                <div className="row align-items-center page-content">
                                    <div className='info'>
                                        <img src={require('../../../images/svg/Email.svg')}></img>
                                    </div>
                                    <div>
                                        <p className='mb-0'>ofir@taliwood.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className='overlay'></div>
                        </div>
                    </div>
                    <div className="col-12 col-md-7 contact-form mt-5 mt-md-0">
                        <form id="contact-form" method="POST">
                            <div className="form-group d-flex align-item-center justify-content-between mb-0">
                                <input placeholder='FirstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" required className="form-control mr-3" />
                                <input placeholder='LastName' value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" required className="form-control" />
                            </div>
                            <div className="form-group">
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email address' required className="form-control" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control area" value={msg} onChange={(e) => setMsg(e.target.value)} required placeholder='Message' rows="5" />
                            </div>
                            <ReCAPTCHA
                                sitekey="6LfgYTIiAAAAALPXIAiVFbTS5GF7hdTll5LieKZg"
                            />
                            <button type="submit" onClick={submit} className="btn btn-send">SEND</button>
                        </form>

                    </div>




                    <div className="col-12 col-md-12 mt-5">

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
