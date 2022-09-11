import React, { Fragment } from 'react'
import Header from '../Header'
import Footer from '../Footer'

const Main = ({ children }) => {

    return (
        <Fragment>
            <Header />
            <div className="">
                {children}
            </div>
            <Footer />
        </Fragment>
    )
}

export default Main
