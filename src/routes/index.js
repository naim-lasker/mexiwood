import React from "react"
import { Router, Switch } from "react-router-dom"

import browserHistory from "./History"

import RouteWithLayout from "./RouteWithLayout"
import PublicMain from "../layouts/Public/Main"

import Home from "../pages/Public/home"


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
            </Switch>
        </Router>
    )
}


export default Routes
