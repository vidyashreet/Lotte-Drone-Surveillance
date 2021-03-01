import React, { PureComponent } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Home from './components/Login/Home'
import Box from '@material-ui/core/Box'
import Cookies from 'js-cookie'

class App extends PureComponent {
    render () {
        const PrivateRoute = ({ ...rest }) => (
            <Route
                { ...rest }
                render={ props =>
                    Cookies.get('token') ? (
                        <Dashboard { ...props } />
                    ) : (
                        <Redirect
                            to={ {
                                pathname: '/'
                            } }
                        />
                    ) }
            />
        )
        return (
            <Box display="flex" flexDirection="column" height="100vh">
                <HashRouter>
                    <Switch>
                        <PrivateRoute exact path="/dashboard" component={ Dashboard } />
                        <Route path="/" component={ Home } />
                    </Switch>
                </HashRouter>
            </Box>
        )
    }
}

export default App
