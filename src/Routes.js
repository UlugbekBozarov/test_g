import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import Anketa from './Components/anketa/Anketa'
import Profile from './Components/profile/Profile'

const Routes = () => {
    return (
        <div id="routes">
            <div className="routes_block h-100">
                <Switch>
                    <Route path="/profile" component={Profile} />
                    <Route path="/anketa" component={Anketa} />

                    <Redirect to="/anketa" />
                </Switch>
            </div>
        </div>
    )
}

export default Routes
