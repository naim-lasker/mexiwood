import React from "react"
import { Router, Switch } from "react-router-dom"

import browserHistory from "./History"

import RouteWithLayout from "./RouteWithLayout"
import PublicMain from "../layouts/Public/Main"

import Home from "../pages/Public/home"
import Details from "../pages/Public/details"
import Contact from "../pages/Public/contact"
import About from "../pages/Public/about"


const Routes = () => {

    return (
        <Router history={browserHistory}>
            <Switch>
                <RouteWithLayout
                    component={Home}
                    exact
                    layout={PublicMain}
                    path='/'
                    title='Home'
                />
                <RouteWithLayout
                    component={Details}
                    exact
                    layout={PublicMain}
                    path='/details'
                    title='Details'
                />
                <RouteWithLayout
                    component={Contact}
                    exact
                    layout={PublicMain}
                    path='/contact'
                    title='Contact Us'
                />
                <RouteWithLayout
                    component={About}
                    exact
                    layout={PublicMain}
                    path='/about'
                    title='About Us'
                />
            </Switch>
        </Router>
    )
}


export default Routes
