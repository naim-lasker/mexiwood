import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'



const SingleHomeItem = ({ item, imgType, imgName }) => {

    const [path, setPath] = useState('white')


    return (
        <>

            <div className='gallery'>
                <Link to={{
                    pathname: "/details",
                    data: item,
                    color: path
                }} style={{ textDecoration: 'none' }}>
                    <div className='bg-img-container'>
                        <img className='bg-img' src={require(`../../../images/home/${imgType}/angle_${path}.jpg`)} />
                        <img className='float-img' src={require(`../../../images/home/${imgType}/angle_${path}_small.jpg`)} />
                    </div>
                    <h6>{imgName}</h6>
                </Link>
                <div className="small-img d-flex">
                    <img onClick={() => setPath('white')} src={require(`../../../images/svg/ven/circle3.png`)} />
                    <img onClick={() => setPath('gray')} src={require(`../../../images/svg/ven/circle2.svg`)} />
                    <img onClick={() => setPath('cream')} src={require(`../../../images/svg/ven/circle1.svg`)} />
                </div>
            </div>
        </>
    )
}

export default SingleHomeItem
