import openSocket from 'socket.io-client'
import Cookies from 'js-cookie'

const socket = openSocket('http://18.189.160.225:1936/', {
    transportOptions: {
        polling: {
            extraHeaders: {
                Authorization: `Bearer ${Cookies.get('token')}`
            }
        }
    }
})

function connect (cb) {
    socket.on('telemetric response', message => {
        cb(message)
    })
}

export { connect }