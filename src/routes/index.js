import React from "react"
import { BrowserRouter, Router, Switch } from "react-router-dom"

import browserHistory from "./History"

import RouteWithLayout from "./RouteWithLayout"
import PublicMain from "../layouts/Public/Main"
import PublicMain2 from "../layouts/Public/Main2"

import Home from "../pages/Public/home"
import Contact from "../pages/Public/contact"
import About from "../pages/Public/about"


const Routes = () => {

    return (
        <BrowserRouter basename={window.location.pathname || ''}>
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
                </Switch>
            </Router>
        </BrowserRouter>
    )
}


export default Routes
