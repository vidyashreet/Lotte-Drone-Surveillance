import openSocket from 'socket.io-client'
import Cookies from 'js-cookie'

const socket = openSocket('', {
    path: '/',
    transportOptions: {
        polling: {
            extraHeaders: {
                Authorization: `Bearer ${Cookies.get('token')}`
            }
        }
    }
})

function connect (cb, isProdMode) {
    if (isProdMode) {
        socket.on('telemetric response', message => {
            cb(message)
        })
    } else {
        socket.on('telemetric response test', message => {
            cb(message)
        })
    }
}

export { connect }