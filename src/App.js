import React, { Component } from 'react'
import Nav from './Nav'
import Users from './Users'
import Things from './Things'
import { Route, HashRouter } from 'react-router-dom'

export default class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Acme Favorites</h1>
                    <Nav />
                    <Route exact path="/" component={Users} />
                    <Route exact path="/users" component={Users} />
                    <Route exact path="/things" component={Things} />
                </div>
            </HashRouter>

        )
    }
}
