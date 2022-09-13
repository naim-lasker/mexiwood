import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer-bottom">
            <div className="container">
                <div className="row  justify-content-center">
                    <div className="col-lg-6 md-mb-10 text-lg-end text-center order-last">
                        <ul className="copy-right-menu row align-items-center justify-content-center">
                            <li>
                                <Link className='link' to={{
                                    pathname: "/",
                                }}>
                                    <div>Home</div>
                                </Link>
                            </li>
                            <li>
                                <Link className='link' to={{
                                    pathname: "/contact",
                                }}>
                                    <div>Contact us</div>
                                </Link>
                            </li>
                            <li>
                                <Link className='link' to={{
                                    pathname: "/about",
                                }}>
                                    <div>About us</div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <div className="copyright text-lg-start text-center ">
                            <p className='mb-0'>© 2022- Mexiwood. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer