import React, { PureComponent } from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
import Canvas from './Canvas'
import PropTypes from 'prop-types'
import { ellipse, crossFill, modifiedPlus } from '../../../assets'

class Map extends PureComponent {
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
        const { mapViewDetails, prodMode } = this.props
        return (
            <>
                <Grid container justify="center" alignItems="center">
                    <Grid item xs={ 12 } style={ { textAlign: 'center' } }>
                        <Box color="white.100" p={ 5 } justifyContent="center">
                            <Canvas width="350px" height="315" color="#DADCE0" mapViewData={ mapViewDetails } />
                        </Box>
                    </Grid>
                </Grid>
                <Box color="white.200">
                    <Grid
                        container
                        direction="row"
                        justify="flex-end"
                        alignItems="flex-end"
                    >
                        <Grid item xs={ 3 }>
                            <Box display="flex" flexDirection="row">
                                <Box pr={ 2 } pt={ 1 }>
                                    <img src={ ellipse } width="15px" />
                                </Box>
                                <Box pt={ 0.5 }>
                                    <Typography variant="caption">Drone</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        {!prodMode &&
                        <Grid item xs={ 4 }>
                            <Box display="flex" flexDirection="row">
                                <Box pr={ 2 } pt={ 1 }>
                                    <img src={ modifiedPlus } width="13px" height="13px" />
                                </Box>
                                <Box pt={ 0.5 }>
                                    <Typography variant="caption">Modified GPS</Typography>
                                </Box>
                            </Box>
                        </Grid>}
                        <Grid item xs={ 3 }>
                            <Box display="flex" flexDirection="row">
                                <Box pr={ 2 } pt={ 1 }>
                                    <img src={ crossFill } width="13px" height="13px" />
                                </Box>
                                <Box pt={ 0.5 }>
                                    <Typography variant="caption">Our system</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </>
        )
    }
}

Map.propTypes = {
    mapViewDetails: PropTypes.array,
    prodMode: PropTypes.bool
}

export default Map
