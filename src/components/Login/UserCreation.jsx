import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
    Box, Typography, Grid, TextField, Button
} from '@material-ui/core'
import { createUser } from '../../api/login'

class UserCreation extends PureComponent {
    constructor (props) {
        super(props)
        this.state = {
            loginDetails: {
                userId: '',
                password: '',
                firstName: '',
                lastName: '',
                emailAddress: ''
            }
        }
        this.handleLogin = this.handleLogin.bind(this)
        this.handleChangeUserId = this.handleChangeUserId.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.handleChangeFirstName = this.handleChangeFirstName.bind(this)
        this.handleChangeLastName = this.handleChangeLastName.bind(this)
        this.handleChangeEmailId = this.handleChangeEmailId.bind(this)
    }

    handleLogin () {
        event.preventDefault()
        const userDetails = {
            userId: this.state.loginDetails.userId,
            firstName: this.state.loginDetails.firstName,
            lastName: this.state.loginDetails.lastName,
            emailAddress: this.state.loginDetails.emailAddress,
            password: this.state.loginDetails.password
        }
        createUser(userDetails).then(response => alert('User successfully created. Login to proceed'))
            .catch(err => {
                if (err.response && err.response.data.msg) {
                    alert(err.response.data.msg)
                }
            })
    }

    handleChangeUserId ({ target: { value } }) {
        const { loginDetails } = this.state
        this.setState({ loginDetails: { ...loginDetails, userId: value } })
    }

    handleChangePassword ({ target: { value } }) {
        const { loginDetails } = this.state
        this.setState({ loginDetails: { ...loginDetails, password: value } })
    }

    handleChangeFirstName ({ target: { value } }) {
        const { loginDetails } = this.state
        this.setState({ loginDetails: { ...loginDetails, firstName: value } })
    }

    handleChangeLastName ({ target: { value } }) {
        const { loginDetails } = this.state
        this.setState({ loginDetails: { ...loginDetails, lastName: value } })
    }

    handleChangeEmailId ({ target: { value } }) {
        const { loginDetails } = this.state
        this.setState({ loginDetails: { ...loginDetails, emailAddress: value } })
    }

    render () {
        return (
            <Grid container justify="center" alignItems="center">
                <Grid item xs={ 5 }>
                    <Box mt={ 25 } borderRadius={ 4 } border={ 1 } borderColor="white.300">
                        <form onSubmit={ this.handleLogin } autoComplete="off">
                            <Grid container justify="center" alignItems="center">
                                <Grid item xs={ 12 } style={ { textAlign: 'center' } }>
                                    <Box p={ 4 } color="white.200">
                                        <Typography variant="h1">Lotte Drone Surveillance</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={ 12 } style={ { textAlign: 'center' } }>
                                    <Box px={ 10 } py={ 4 } color="white.200">
                                        <TextField
                                            required
                                            fullWidth
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
                                <Grid item xs={ 6 } style={ { textAlign: 'center' } }>
                                    <Box pl={ 10 } pr={ 4 } py={ 4 } color="white.200">
                                        <TextField
                                            required
                                            fullWidth
                                            label="Firstname"
                                            type="text"
                                            value={ this.state.loginDetails.firstName }
                                            onChange={ this.handleChangeFirstName }
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
                                <Grid item xs={ 6 } style={ { textAlign: 'center' } }>
                                    <Box pr={ 10 } pl={ 4 } py={ 4 } color="white.200">
                                        <TextField
                                            required
                                            fullWidth
                                            label="Lastname"
                                            type="text"
                                            value={ this.state.loginDetails.lastName }
                                            onChange={ this.handleChangeLastName }
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
                                            required
                                            fullWidth
                                            label="Email Id"
                                            type="email"
                                            value={ this.state.loginDetails.emailAddress }
                                            onChange={ this.handleChangeEmailId }
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
                                            required
                                            fullWidth
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
                                            Create User
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

UserCreation.propTypes = {
    textField: PropTypes.object.isRequired
}

export default withRouter(UserCreation)
