import React from 'react'
import { HashRouter, Route, Redirect, Switch } from 'dva/router';
import Home from './pages/home'
const Router = (props) => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/home" component={Home}></Route>
                <Redirect to="/home"></Redirect>
            </Switch>
        </HashRouter>
    )
}
export default Router