import React, { PureComponent } from 'react'
import { Box, Typography, Grid } from '@material-ui/core'
import { Scrollbars } from 'react-custom-scrollbars'
import Video from './Video/Video'
import Log from './Log/Log'
import Map from './Map/Map'
import AppHeader from './AppHeader'
import AppBar from '@material-ui/core/AppBar'
import { connect } from '../../api/socket-service'
import { refreshToken } from '../../api/login'
import {
    ellipse, blueCross, yellowCross, whiteCross, greyCross, arrowLeft, arrowTop, deviationBlue, deviationYellow, deviationWhite, deviationGrey
} from '../../assets'

const objectsImages = [ { image: blueCross }, { image: yellowCross }, { image: whiteCross }, { image: greyCross } ]
const deviationImages = [ { image: deviationBlue }, { image: deviationYellow }, { image: deviationWhite }, { image: deviationGrey } ]

const data = {
    token: 'dsddsad',
    drone: { id: 'fdfdf', name: 'Drone name here', height: { data: 10, unit: 'meter' }, map: { x: 80, y: 100 } },
    mle: { data: 2.23, unit: 'meter' },
    logFormat: 'yyyymmdd,hh:mm:ss.Obj{​​​​​​​id}​​​​​​​.{​​​​​​​distance}​​​​​​​: {​​​​​​​le}​​​​​​​',
    objects: [ {
        type: 'pedestrian',
        id: 1,
        colorHexa: '#e10a34',
        map: { x: 20, y: 46.39308736141907 },
        log: {
            originalMetrics: { map: { x: 30, y: 80 }, distance: { data: 9, unit: 'meter' }, direction: { data: 8, unit: 'degree' }, gps: { longitude: 76.5997653, latitude: 11.4466737 } },
            deviation: {
                isFound: true, percentage: 5, 'max-percentage': 5, distance: { data: 1, unit: 'meter', mle: 1.8 }, direction: { data: 2, unit: 'degree' }, gps: { longitude: '01.0000000', latitude: '01.0000000' }
            },
            message: '<red>Obj(1) measured distance 10 m vs 9m, 10 deg vs 8 deg at Error rate 5% <red>',
            format: 'yyyymmdd,hh:mm:ss.Obj{id}.{distance}: {le}'
        },
        metrics: { distance: { data: 3.61, unit: 'meter' }, direction: { data: 10, unit: 'degree' }, gps: { longitude: 77.5997653, latitude: 11.4466737 } }
    }, {
        type: 'pedestrian',
        id: 2,
        colorHexa: '#0000ff',
        map: { x: 150, y: 46.45194233502538 },
        log: {
            originalMetrics: { map: { x: 50, y: 90 }, distance: { data: 9, unit: 'meter' }, direction: { data: 8, unit: 'degree' }, gps: { longitude: 76.5997653, latitude: 11.4466737 } },
            deviation: {
                isFound: true, percentage: 5, 'max-percentage': 5, distance: { data: 1, unit: 'meter', mle: 1.8 }, direction: { data: 2, unit: 'degree' }, gps: { longitude: '01.0000000', latitude: '01.0000000' }
            },
            message: '<red>Obj(1) measured distance 10 m vs 9m, 10 deg vs 8 deg at Error rate 5% <red>',
            format: 'yyyymmdd,hh:mm:ss.Obj{id}.{distance}: {le}'
        },
        metrics: { distance: { data: 3.55, unit: 'meter' }, direction: { data: 10, unit: 'degree' }, gps: { longitude: 77.5997653, latitude: 11.4466737 } }
    } ]
}

class Dashboard extends PureComponent {
    constructor (props) {
        super(props)

        this.refreshInterval = setInterval(() => {
            this.refreshToken()
        }, 1500000)

        this.state = {
            socketData: undefined,
            logData: [],
            logDataMle: undefined,
            mapViewData: [ { uri: arrowLeft, x: 16, y: 279 }, { uri: arrowTop, x: 26, y: 270 } ],
            isProdMode: true
        }

        this.handleDashboardData = this.handleDashboardData.bind(this)
        this.handleChangeEnvironment = this.handleChangeEnvironment.bind(this)
        this.refreshToken = this.refreshToken.bind(this)

        connect(message => {
            if (message.drone) {
                this.setState({ socketData: message })
                this.handleDashboardData(this.state.isProdMode)
            }
        }, this.state.isProdMode)
    }

    handleChangeEnvironment () {
        this.setState({ isProdMode: !this.state.isProdMode })
        connect(message => {
            if (message.drone) {
                this.setState({ socketData: message })
                this.handleDashboardData(!this.state.isProdMode)
            }
        }, !this.state.isProdMode)
    }

    handleDashboardData (prodMode) {
        const { socketData } = this.state
        this.setState(prevState => ({
            mapViewData: [ { uri: arrowLeft, x: 16, y: 279 }, { uri: arrowTop, x: 26, y: 270 } ]
        }))
        this.setState(prevState => ({
            logData: [ ...prevState.logData, { break: true } ]
        }))
        this.setState(prevState => ({
            mapViewData: [ ...prevState.mapViewData, { uri: ellipse, x: (socketData.drone.map.x), y: (socketData.drone.map.y) } ]
        }))
        if (socketData && socketData.objects.length) {
            socketData.objects.map((object, index) => {
                this.setState(prevState => ({
                    logData: [ ...prevState.logData, { deviation: object.log.deviation.isFound, message: object.log.message } ],
                    mapViewData: [ ...prevState.mapViewData, { uri: objectsImages[ index % 4 ].image, x: (object.map.x), y: (object.map.y), id: object.id, deviation: false, color: object.colorHexa } ],
                    logDataMle: { mle: socketData.mle.data, format: socketData.logFormat, unit: socketData.mle.unit }
                }))
            })
            if (!prodMode) {
                socketData.objects.map((object, index) => {
                    this.setState(prevState => ({
                        mapViewData: [ ...prevState.mapViewData, { uri: deviationImages[ index % 4  ].image, x: (object.log.originalMetrics.map.x), y: (object.log.originalMetrics.map.y), id: object.id, deviation: true, color: object.colorHexa } ]
                    }))
                })
            }
        }
    }

    refreshToken () {
        refreshToken().then(response => {
            alert('Session refreshed')
            Cookies.set('token', response.data.access_token)
        })
            .catch(err => {
                if (err.response && err.response.data.msg === 'Invalid Token') {
                    alert('Session expired login to continue')
                    Cookies.remove('token')
                    this.props.history.push('/')
                }
            })
    }

    componentWillUnmount () {
        clearInterval(this.refreshInterval)
    }

    render () {
        return (
            <Grid container alignItems="center">
                <Grid item xs={ 12 }>
                    <Box display="flex" flexDirection="column">
                        <AppBar position="fixed">
                            <AppHeader changeEnvironment={ this.handleChangeEnvironment } prodMode={ this.state.isProdMode } />
                        </AppBar>
                        <Box display="flex" flexDirection="row" mx={ 22 } mt={ 20 } zIndex={ 1 }>
                            <Box width="45%" mr={ 4 }>
                                <Box height="35px" color="white.200">
                                    <Typography variant="h3">Camera view</Typography>
                                </Box>
                                <Box height="400px" borderRadius={ 4 } border={ 1 } borderColor="white.200">
                                    <Video droneData={ this.state.socketData && this.state.socketData.drone } droneObjectCount={ this.state.socketData && this.state.socketData.objects.length } />
                                </Box>
                            </Box>
                            <Box width="45%" mr={ 4 }>
                                <Box height="35px" color="white.200">
                                    <Typography variant="h3">GPS view</Typography>
                                </Box>
                                <Box height="400px" borderRadius={ 4 } border={ 1 } borderColor="white.200">
                                    <Map mapViewDetails={ this.state.mapViewData } prodMode={ this.state.isProdMode } />
                                </Box>
                            </Box>
                            {!this.state.isProdMode &&
                            <Box width="398px" mr={ 4 }>
                                <Box height="35px" color="white.200">
                                    <Typography variant="h3">Logs</Typography>
                                </Box>
                                <Box height="400px" borderRadius={ 4 } border={ 1 } borderColor="white.200">
                                    <Scrollbars
                                        renderThumbVertical={ ({ style, ...props }) =>
                                            <Box mr={ 3 } mt={ 3 } mb={ 3 } { ...props } width="4px" bgcolor="white.200" borderRadius="5px" /> }
                                    >
                                        <Log message={ this.state.logData } logDateMle={ this.state.logDataMle } />
                                    </Scrollbars>
                                </Box>
                            </Box>}
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        )
    }
}

export default Dashboard
