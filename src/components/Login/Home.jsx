import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {
    Grid, AppBar, Box, Button, withStyles
} from '@material-ui/core'
import Login from './Login'
import UserCreation from './UserCreation'

const styles = theme => ({
    label: {
        color: theme.palette.white[ '300' ],
        '&$focusedLabel': {
            color: theme.palette.white[ '300' ]
        }
    },
    focusedLabel: {},
    erroredLabel: {},
    underline: {
        color: theme.palette.white[ '300' ],
        '&:after': {
            borderBottom: '1px solid #fff'
        }
    },
    error: {}
})

class Home extends PureComponent {
    constructor (props) {
        super(props)

        this.state = {
            isLogin: 'login'
        }

        this.handleUserLogin = this.handleUserLogin.bind(this)
    }

    handleUserLogin (event) {
        this.setState({ isLogin: event.currentTarget.value })
    }

    render () {
        const { classes } = this.props
        return (
            <Grid container justify="center" alignItems="center">
                <Grid item xs={ 12 }>
                    <AppBar position="fixed">
                        <Box height="50px" display="flex" flexDirection="row">
                            <Box width="100%" />
                            <Box pt={ 2 } flexShrink={ 1 } width="20%">
                                <Button variant="contained" fontSize="small" value="userCreation" onClick={ this.handleUserLogin }>
                                    Create User
                                </Button>
                            </Box>
                            <Box pt={ 2 } flexShrink={ 0 } width="10%">
                                <Button variant="contained" fontSize="small" value="login" onClick={ this.handleUserLogin }>
                                    Login
                                </Button>
                            </Box>
                        </Box>
                    </AppBar>
                </Grid>
                {this.state.isLogin === 'login' &&
                <Grid item xs={ 12 }>
                    <Login textField={ classes } />
                </Grid>}
                {this.state.isLogin === 'userCreation' &&
                <Grid item xs={ 12 }>
                    <UserCreation textField={ classes } />
                </Grid>}
            </Grid>
        )
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)
