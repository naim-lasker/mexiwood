import React from "react"
import { Router, Switch } from "react-router-dom"

import browserHistory from "./History"

import RouteWithLayout from "./RouteWithLayout"
import PublicMain from "../layouts/Public/Main"
import PublicMain2 from "../layouts/Public/Main2"

import Home from "../pages/Public/home"
import Contact from "../pages/Public/contact"
import About from "../pages/Public/about"
import Details from "../pages/Public/details"


const Routes = () => {

    return (
        <Router history={browserHistory}>
            <Switch>
                <RouteWithLayout
                    component={Home}
                    exact
                    layout={PublicMain2}
                    path='/'
                    title='Home'
                />
                <RouteWithLayout
                    component={Contact}
                    exact
                    layout={PublicMain2}
                    path='/contact'
                    title='Contact Us'
                />
                <RouteWithLayout
                    component={About}
                    exact
                    layout={PublicMain2}
                    path='/about'
                    title='About Us'
                />
                <RouteWithLayout
                    component={Details}
                    exact
                    layout={PublicMain2}
                    path='/:name'
                    title='Details'
                />
            </Switch>
        </Router>
    )
}


export default Routes
