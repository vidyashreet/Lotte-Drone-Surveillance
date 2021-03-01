import openSocket from 'socket.io-client'
import Cookies from 'js-cookie'
const BaseUrl = window.location.protocol + '//' + window.location.hostname;
const socket = openSocket(`${ BaseUrl }:1936/`, {
    transportOptions: {
        polling: {
            extraHeaders: {
                Authorization: `Bearer ${ Cookies.get('token') }`
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
