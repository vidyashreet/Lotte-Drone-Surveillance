import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Home from './components/Login/Home'
import Box from '@material-ui/core/Box'

class App extends Component {
    render () {
        return (
            <Box display="flex" flexDirection="column" height="100vh">
                <HashRouter>
                    <Switch>
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/" component={Home} />
                    </Switch>
                </HashRouter>
            </Box>
        )
    }
}

export default App
