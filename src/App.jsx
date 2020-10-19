import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Box from '@material-ui/core/Box'

class App extends Component {
    render () {
        return (
            <Box display="flex" flexDirection="column" height="100vh">
                <Router>
                    <Switch>
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/" component={Dashboard} />
                    </Switch>
                </Router>
            </Box>
        )
    }
}

export default App
