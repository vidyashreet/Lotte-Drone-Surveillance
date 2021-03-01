import React, { PureComponent } from 'react'
import {
    Box, Typography, Grid, TextField, Button
} from '@material-ui/core'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { loginUser } from '../../api/login'
import PropTypes from 'prop-types'

import Cookies from 'js-cookie'

class Login extends PureComponent {
    constructor (props) {
        super(props)
        this.state = {
            loginDetails: {
                userId: '',
                password: ''
            }
        }
        this.handleLogin = this.handleLogin.bind(this)
        this.handleChangeUserId = this.handleChangeUserId.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
    }

    handleLogin () {
        Cookies.remove('token')
        event.preventDefault()
        const loginDetails = {
            userId: this.state.loginDetails.userId,
            password: this.state.loginDetails.password
        }

        loginUser(loginDetails).then(response => {
            Cookies.set('token', response.data.access_token)
            if (Cookies.get('token') !== null) {
                axios.defaults.headers.common.Authorization = `Bearer ${ Cookies.get('token') }`
                this.props.history.push('/dashboard')
            }
        })
            .catch(err => alert('Incorrect login credentials'))
    }

    handleChangeUserId ({ target: { value } }) {
        const { loginDetails } = this.state
        this.setState({ loginDetails: { ...loginDetails, userId: value } })
    }

    handleChangePassword ({ target: { value } }) {
        const { loginDetails } = this.state
        this.setState({ loginDetails: { ...loginDetails, password: value } })
    }

    render () {
        return (
            <Grid container justify="center" alignItems="center">
                <Grid item xs={ 4 }>
                    <Box mt={ 30 } borderRadius={ 4 } border={ 1 } borderColor="white.200">
                        <form onSubmit={ this.handleLogin } autoComplete="off">
                            <Grid container justify="center" alignItems="center">
                                <Grid item xs={ 12 } style={ { textAlign: 'center' } }>
                                    <Box p={ 4 } color="white.300">
                                        <Typography variant="h1">Lotte Drone Surveillance</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={ 12 } style={ { textAlign: 'center' } }>
                                    <Box px={ 10 } py={ 4 } color="white.200">
                                        <TextField
                                            fullWidth
                                            required
                                            id="login-name"
                                            label="Username"
                                            type="text"
                                            value={ this.state.loginDetails.userId }
                                            onChange={ this.handleChangeUserId }
                                            InputLabelProps={ {
                                                classes: {
                                                    root: this.props.textField.label,
                                                    focused: this.props.textField.focusedLabel
                                                },
                                                className: this.props.textField.label
                                            } }
                                            InputProps={ {
                                                classes: {
                                                    root: this.props.textField.underline
                                                }
                                            } }
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={ 12 } style={ { textAlign: 'center' } }>
                                    <Box px={ 10 } py={ 4 } color="white.200">
                                        <TextField
                                            fullWidth
                                            required
                                            id="login-password"
                                            label="Password"
                                            type="password"
                                            value={ this.state.loginDetails.password }
                                            onChange={ this.handleChangePassword }
                                            InputLabelProps={ {
                                                classes: {
                                                    root: this.props.textField.label,
                                                    focused: this.props.textField.focusedLabel
                                                },
                                                className: this.props.textField.label
                                            } }
                                            InputProps={ {
                                                classes: {
                                                    root: this.props.textField.underline
                                                }
                                            } }
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={ 12 } style={ { textAlign: 'center' } }>
                                    <Box px={ 4 } pt={ 5 } pb={ 10 } color="white.200">
                                        <Button variant="contained" type="submit" color="secondary" fontSize="small">
                                            Login
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>

        )
    }
}

Login.propTypes = {
    textField: PropTypes.object.isRequired
}

export default withRouter(Login)
