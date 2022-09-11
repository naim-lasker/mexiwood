import React from 'react'


const Home = () => {
    return (
        <>
            <section>
                <video class="banner-video" autoplay muted loop playsinline>
                    <source src="https://mexiwood.mx/images/videos/plywood-vid-3.mp4" type="video/mp4"></source>
                </video>
            </section>

            <section>
                <div class="container">
                    <h2 class="furniture-content">Bathroom Vanities</h2>
                </div>

                <div class="container-fulid padding">
                    <div class="row">
                        <div class="col-xs-12 col-sm-6 col-md-3 mr-auto">
                            <img class="furniture-img" src="/img/furniture pic-1.jpeg"></img>
                            <p class="furniture-text">24-Inch Vanities</p>
                        </div>

                        <div class="col-xs-12 col-sm-6 col-md-3">
                            <img class="furniture-img" src="img\furniture pic-2.jpg"></img>
                            <p class="furniture-text">30-Inch Vanities</p>
                        </div>

                        <div class="col-xs-12 col-sm-6 col-md-3">
                            <img class="furniture-img" src="img\furniture pic-3.jpg"></img>
                            <p class="furniture-text">36-Inch Vanities</p>
                        </div>

                        <div class="col-xs-12 col-sm-6 col-md-3">
                            <img class="furniture-img" src="img\furniture pic-4.jpeg"></img>
                            <p class="furniture-text">48-Inch Vanities</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
