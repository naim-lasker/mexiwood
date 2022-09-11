import React from 'react'

const Header = () => {
    return (

        <header>
            <nav class="navbar navbar-light bg-light justify-content-between mr-auto">
                <div class="container outline">
                    <a class="navbar-brand"><h1 class="header-title">Collective</h1></a>

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
                            <li class="nav-item">
                                <a class="nav-link" href="">All Products</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href=""> Living</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href=""> Furniture</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href=""> Accessory</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href=""> Contact</a>
                            </li>
                        </ul>


                        <div class="header-right row">
                            <h3>Follow us-</h3>
                            <ul class="navbar-nav sm-icons">
                                <a class="nav-link" href=""><i class="fa fa-facebook"></i></a>
                                <a class="nav-link" href=""><i class="fa fa-twitter"></i></a>
                                <a class="nav-link" href=""><i class="fa fa-instagram"></i></a>
                                <a class="nav-link" href=""><i class="fa fa-tiktok"></i></a>
                            </ul>
                        </div>

                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
