import React, { PureComponent } from 'react'
import Box from '@material-ui/core/Box'
import { Typography, Switch } from '@material-ui/core'
import Iframe from 'react-iframe'
import PropTypes from 'prop-types'

class Video extends PureComponent {
    constructor (props) {
        super(props)

        this.state = {
            isTrajectories: true
        }

        this.handleChangeTracjectory = this.handleChangeTracjectory.bind(this)
    }

    handleChangeTracjectory () {
        this.setState({ isTrajectories: !this.state.isTrajectories })
    }

    render () {
        const surveillanceUrl = this.state.isTrajectories ? 'http://18.189.160.225:1937/video' : 'http://18.189.160.225:1937/video'
        const { droneData, droneObjectCount } = this.props

        return (
            <Box display="flex" flexDirection="column" color="white.100">
                <Box height="340px">
                    <Iframe
                        url={surveillanceUrl}
                        className="video-frame"
                        display="initial"
                        position="relative"
                        height="320"
                        width="400"
                        frameBorder="0"
                    />
                </Box>
                <Box>
                    <Box display="flex" flexDirection="row">
                        <Box width="100%" display="flex" flexDirection="row">
                            <Box pr={2} ml={4} width="50px">
                                <Typography variant="caption">
                                    Drone Height:
                                </Typography>
                            </Box>
                            {this.props.droneData &&
                            <Box pr={5} pt={1}>
                                <Typography variant="h2">
                                    {`${droneData.height.data} ${droneData.height.unit.charAt(0)}`}
                                </Typography>
                            </Box>}
                            <Box pr={2} width="70px">
                                <Typography variant="caption">
                                    Detecting objects:
                                </Typography>
                            </Box>
                            {droneObjectCount &&
                            <Box pt={1}>
                                <Typography pt={2} variant="h2">
                                    {droneObjectCount}
                                </Typography>
                            </Box>}
                        </Box>
                        <Box flexShrink={0}>
                            <Box>
                                <Typography variant="body1" component="span">
                                    Trajectories
                                </Typography>
                                <Switch
                                    checked={this.state.isTrajectories}
                                    onChange={this.handleChangeTracjectory}
                                    name="checkedA"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        )
    }
}

Map.propTypes = {
    droneData: PropTypes.object,
    droneObjectCount: PropTypes.number
}

export default Video
