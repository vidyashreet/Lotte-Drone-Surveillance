import React, { PureComponent } from 'react'
import { Typography, Box } from '@material-ui/core'
import { headerIcon, wave, profile} from '../../assets'

class AppHeader extends PureComponent {
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
                        <Typography variant="h6">John Doe</Typography>
                    </Box>
                    <Box py={3} pr={5}>
                        <img src={profile} width="30px" height="30px" />
                    </Box>
                </Box>
            </Box>
        )
    }
}

export default AppHeader
