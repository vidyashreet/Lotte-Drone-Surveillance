import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Box, Typography } from '@material-ui/core'

class Log extends PureComponent {
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
        return (
            <>
                {this.props.message.length ? (
                    <Box display="flex" flexDirection="column" p={4}>
                    {this.props.logDateMle &&
                    <>
                        <Box color="white.100">
                            <Typography variant="caption">Mean </Typography>
                            <Typography variant="caption">localization error:  </Typography>
                            <Typography variant="h2" component="span">{this.props.logDateMle.mle}{this.props.logDateMle.unit.charAt(0)}</Typography>
                        </Box>
                        <Box color="red.600" py={2}>
                            <Typography variant="body1">{this.props.logDateMle.format} </Typography>
                        </Box>
                        </>
                        }
                        {
                            this.props.message.reverse().map((listData, index) =>

                                <Box key={index} color={listData.deviation ? 'red.600' : 'white.100'}>
                                    {listData.break ? <br /> : listData.message}
                                </Box>
                            )
                        }
                    </Box>) : (
                        <Box display="flex" flexDirection="column" p={4} color="white.200">
                        <Typography variant="body1">No objects found!</Typography>
                    </Box>)}
            </>
        )
    }
}

Log.propTypes = {
    message: PropTypes.array,
    logDateMle: PropTypes.object
}

export default Log
