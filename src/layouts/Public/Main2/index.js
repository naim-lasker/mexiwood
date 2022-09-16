import React, { Fragment } from 'react'
import Footer from '../Footer'
import Header2 from '../Header2'

const Main2 = ({ children }) => {

    return (
        <Fragment>
            <Header2 />
            <div className="">
                {children}
            </div>
            <Footer />
        </Fragment>
    )
}

export default Main2
