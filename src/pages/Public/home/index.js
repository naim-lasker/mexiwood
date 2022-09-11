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
                    <h2 className="furniture-content text-center text-md-left">Bathroom Vanities</h2>
                </div>

                <div className="container pt-5">
                    <div className="row align-items-center justify-content-center">
                        {furnitureItems.length > 0 && furnitureItems.map((item, i) =>
                            <Link className="col-12 col-sm-12 col-md-3 item" to={{
                                pathname: "/details",
                                state: item
                            }}>
                                <img className="furniture-img" src={item.img}></img>
                                <p className="furniture-text">{item.catagory}</p>
                            </Link>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
