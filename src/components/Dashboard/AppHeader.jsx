import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
    Typography, Box, Menu, MenuItem, IconButton, Fade, Switch
} from '@material-ui/core'
import { headerIcon, wave, profile } from '../../assets'
import Cookies from 'js-cookie'
import { logout } from '../../api/login'

class AppHeader extends PureComponent {
    constructor (props) {
        super(props)

        this.state = {
            anchorEl: null
        }

        this.handleOpenMenu = this.handleOpenMenu.bind(this)
        this.handleCloseMenu = this.handleCloseMenu.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
    }

    handleOpenMenu ({ currentTarget: anchorEl }) {
        this.setState({ anchorEl })
    }

    handleCloseMenu () {
        this.setState({ anchorEl: null })
    }

    handleLogout () {
        logout().then(response => {
            Cookies.set('token', null)
            this.props.history.push('/')
        })
            .catch(err => {
                if (err.response && err.response.data.msg === 'Invalid Token') {
                    alert('Session expired login to continue')
                    Cookies.set('token', null)
                    this.props.history.push('/')
                }
            })
    }

    render () {
        return (
            <Box height="50px" display="flex" flexDirection="row">
                <Box width="100%" display="flex" flexDirection="row">
                    <Box p={3} component="span">
                        <img src={headerIcon} width="25px" height="25px" />
                    </Box>
                    <Box p={4}>
                        <img src={wave} width="60px" />
                    </Box>
                </Box>
                <Box flexShrink={0} display="flex" flexDirection="row">
                    <Box p={3} component="span">
                        <Typography variant="caption">Prod Mode</Typography>
                        <Switch
                            checked={this.props.prodMode}
                            onChange={this.props.changeEnvironment}
                            name="checkedA"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                    </Box>
                    <Box p={3} component="span">
                        <Typography variant="h6">John Doe</Typography>
                    </Box>
                    <Box pr={5}>
                        <IconButton aria-controls="fade-menu" aria-haspopup="true" onClick={this.handleOpenMenu}>
                            <img src={profile} width="30px" height="30px" />
                        </IconButton>
                        <Menu
                            id="fade-menu"
                            anchorEl={this.state.anchorEl}
                            keepMounted
                            open={Boolean(this.state.anchorEl)}
                            onClose={this.handleCloseMenu}
                            TransitionComponent={Fade}
                        >
                            <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
                        </Menu>
                    </Box>
                </Box>
            </Box>
        )
    }
}

AppHeader.propTypes = {
    prodMode: PropTypes.bool,
    changeEnvironment: PropTypes.func
}

export default withRouter(AppHeader)
