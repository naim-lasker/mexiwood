import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div class="footer-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 md-mb-10 text-lg-end text-center order-last">
                        <ul class="copy-right-menu row">
                            <li>
                                <Link className='link' to={{
                                    pathname: "/",
                                }}>
                                    <a href="#home">Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link className='link' to={{
                                    pathname: "/contact",
                                }}>
                                    <a href="#home">Contact us</a>
                                </Link>
                            </li>
                            <li>
                                <Link className='link' to={{
                                    pathname: "/about",
                                }}>
                                    <a href="#home">About us</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-6">
                        <div class="copyright text-lg-start text-center ">
                            <p className='mb-0'>© 2022- Mexiwood. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer