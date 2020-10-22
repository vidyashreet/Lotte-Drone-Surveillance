import React, { PureComponent } from 'react'
import { Box, Typography, CircularProgress, Grid } from '@material-ui/core'
import { Scrollbars } from 'react-custom-scrollbars'
import Video from './Video/Video'
import Log from './Log/Log'
import Map from './Map/Map'
import AppHeader from './AppHeader'
import AppBar from '@material-ui/core/AppBar'
import { connect } from '../../api/socket-service'
import {
    ellipse, blueCross, yellowCross, whiteCross, greyCross, arrowLeft, arrowTop, deviationBlue, deviationYellow, deviationWhite, deviationGrey
} from '../../assets'

const objectsImages = [{ image: blueCross }, { image: yellowCross }, { image: whiteCross }, { image: greyCross }]
const deviationImages = [{ image: deviationBlue }, { image: deviationYellow }, { image: deviationWhite }, { image: deviationGrey }]

const data = {
    token: 'dsddsad',
    drone: { id: 'fdfdf', name: 'Drone name here', height: { data: 10, unit: 'meter' }, map: { x: 20, y: 50 } },
    objects: [{
        type: 'pedestrian',
        id: 1,
        map: { x: 20, y: 46.39308736141907 },
        log: {
            originalMetrics: { map: { x: 18, y: 48 }, distance: { data: 9, unit: 'meter' }, direction: { data: 8, unit: 'degree' }, gps: { longitude: 76.5997653, latitude: 11.4466737 } },
            deviation: {
                isFound: true, percentage: 5, 'max-percentage': 5, distance: { data: 1, unit: 'meter' }, direction: { data: 2, unit: 'degree' }, gps: { longitude: '01.0000000', latitude: '01.0000000' }
            },
            message: '<red>Obj(1) measured distance 10 m vs 9m, 10 deg vs 8 deg at Error rate 5% <red>'
        },
        metrics: { distance: { data: 3.61, unit: 'meter' }, direction: { data: 10, unit: 'degree' }, gps: { longitude: 77.5997653, latitude: 11.4466737 } }
    }, {
        type: 'pedestrian',
        id: 2,
        map: { x: 150, y: 46.45194233502538 },
        log: {
            originalMetrics: { map: { x: 18, y: 48 }, distance: { data: 9, unit: 'meter' }, direction: { data: 8, unit: 'degree' }, gps: { longitude: 76.5997653, latitude: 11.4466737 } },
            deviation: {
                isFound: true, percentage: 5, 'max-percentage': 5, distance: { data: 1, unit: 'meter' }, direction: { data: 2, unit: 'degree' }, gps: { longitude: '01.0000000', latitude: '01.0000000' }
            },
            message: '<red>Obj(1) measured distance 10 m vs 9m, 10 deg vs 8 deg at Error rate 5% <red>'
        },
        metrics: { distance: { data: 3.55, unit: 'meter' }, direction: { data: 10, unit: 'degree' }, gps: { longitude: 77.5997653, latitude: 11.4466737 } }
    }]
}

class Dashboard extends PureComponent {
    constructor (props) {
        super(props)

        //this.mapViewData = [{ uri: arrowLeft, x: 16, y: 182 }, { uri: arrowTop, x: 26, y: 174 }]

        this.state = {
            socketData: undefined,
            logData: [],
            mapViewData: [{ uri: arrowLeft, x: 16, y: 279 }, { uri: arrowTop, x: 26, y: 270 }]
        }

        this.handleDashboardData = this.handleDashboardData.bind(this)
        connect(message => {
            if (message.drone) {
                this.setState({ socketData: message })
                this.handleDashboardData()
            }
        })
    }

    handleDashboardData () {
        const { socketData } = this.state
        this.setState(prevState => ({
            mapViewData: [{ uri: arrowLeft, x: 16, y: 279 }, { uri: arrowTop, x: 26, y: 270 }]
        }))
        this.setState(prevState => ({
            logData: [...prevState.logData, { 'break': true }]
        }))
        this.setState(prevState => ({
            mapViewData: [...prevState.mapViewData, { uri: ellipse, x: (socketData.drone.map.x), y: (socketData.drone.map.y) }]
        }))
        if (socketData && socketData.objects.length) {
            socketData.objects.map((object, index) => {
                this.setState(prevState => ({
                    logData: [...prevState.logData, { deviation: object.log.deviation.isFound, message: object.log.message }],
                    mapViewData: [...prevState.mapViewData, { uri: objectsImages[index].image, x: (object.map.x), y: (object.map.y) }]
                }))
            })
            socketData.objects.map((object, index) => {
                this.setState(prevState => ({
                    mapViewData: [...prevState.mapViewData, { uri: deviationImages[index].image, x: (object.log.originalMetrics.map.x), y: (object.log.originalMetrics.map.y) }]
                }))
            })
        }
    }

    render () {

        return (
            <Grid container alignItems="center">
                <Grid item xs={12}>
                    <Box display="flex" flexDirection="column">
                        <AppBar position="fixed">
                            <AppHeader />
                        </AppBar>
                        <Box display="flex" flexDirection="row" mx={22} mt={20} zIndex={1}>
                            <Box width="534px" mr={4}>
                                <Box height="35px" color="white.200">
                                    <Typography variant="h3">Camera view</Typography>
                                </Box>
                                <Box height="400px" borderRadius={4} border={1} borderColor="white.200">
                                    <Video droneData={this.state.socketData && this.state.socketData.drone} droneObjectCount={this.state.socketData && this.state.socketData.objects.length} />
                                </Box>
                            </Box>
                            <Box width="500px" mr={4}>
                                <Box height="35px" color="white.200">
                                    <Typography variant="h3">GPS view</Typography>
                                </Box>
                                <Box height="400px" borderRadius={4} border={1} borderColor="white.200">
                                    <Map mapViewDetails={this.state.mapViewData} />
                                </Box>
                            </Box>
                            <Box width="398px" mr={4}>
                                <Box height="35px" color="white.200">
                                    <Typography variant="h3">Logs</Typography>
                                </Box>
                                <Box height="400px" borderRadius={4} border={1} borderColor="white.200">
                                    <Scrollbars
                                        renderThumbVertical={({ style, ...props }) =>
                                            <Box mr={3} mt={3} mb={3} {...props} width="4px" bgcolor="white.200" borderRadius="5px" />}
                                    >
                                        <Log message={this.state.logData} />
                                    </Scrollbars>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        )
    }
}

export default Dashboard
