import React from 'react'
import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { SiTiktok } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <header>
            <nav class="navbar justify-content-between mr-auto">
                <div class="container outline">
                    <a class="navbar-brand"><img src='/img/logo-white.png'></img></a>

                    <form class="form-inline">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search this blog" aria-label="Search"></input>
                    </form>
                </div>
            </nav>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul class="navbar-nav mr-auto navigation-menu">
                            <Link to={{
                                pathname: "/",
                            }}>
                                <li class="nav-item">
                                    <a class="nav-link" href="">Home</a>
                                </li>
                            </Link>
                            <li class="nav-item">
                                <a class="nav-link" href=""> Living</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href=""> Furniture</a>
                            </li>
                            <Link to={{
                                pathname: "/contact",
                            }}>
                                <li class="nav-item">
                                    <a class="nav-link" href=""> Contact</a>
                                </li>
                            </Link>
                            <Link to={{
                                pathname: "/about",
                            }}>
                                <li class="nav-item">
                                    <a class="nav-link" href=""> About us</a>
                                </li>
                            </Link>
                        </ul>


                        <div class="header-right row">
                            <h3>Follow us -</h3>
                            <ul class="navbar-nav sm-icons">
                                <a class="nav-link" href=""><AiFillFacebook size={20} /></a>
                                <a class="nav-link" href=""><AiOutlineTwitter size={20} /></a>
                                <a class="nav-link" href=""><AiFillInstagram size={20} /></a>
                                <a class="nav-link" href=""><SiTiktok size={20} /></a>
                            </ul>
                        </div>

                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
