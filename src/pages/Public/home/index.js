import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import { furnitureItems } from '../../../enums/home';



const Home = () => {

    const vidRef = useRef();

    useEffect(() => { vidRef.current.play(); }, []);

    return (
        <>
            <section>
                <video ref={vidRef} className="banner-video" autoPlay muted loop playsinline>
                    <source src="https://mexiwood.mx/images/videos/plywood-vid-3.mp4" type="video/mp4"></source>
                </video>
            </section>

            <section>
                <div className="container pt-5 mt-5">
                    <h2 className="furniture-content">Bathroom Vanities</h2>
                </div>

                <div className="container pt-5">
                    <div className="row">
                        {furnitureItems.length > 0 && furnitureItems.map((item, i) =>
                            <Link className="col-xs-12 col-sm-6 col-md-3 mr-auto" to={{
                                pathname: "/details",
                                state: item
                            }}>
                                <div >
                                    <img className="furniture-img" src={item.img}></img>
                                    <p className="furniture-text">{item.catagory}</p>
                                </div>
                            </Link>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
