import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'

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
            <Box display="flex" flexDirection="column" p={4}>
                {
                    this.props.message.map((listData, index) =>
                        <Box key={index} color={listData.deviation ? "red.600" : "white.100"}>
                            {listData.message}
                        </Box>
                    )
                }
            </Box>
        )
    }
}

Log.propTypes = {
    message: PropTypes.array.isRequired
}

export default Log
