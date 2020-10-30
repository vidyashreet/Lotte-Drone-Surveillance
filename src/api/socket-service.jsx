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

function connect (cb) {
    socket.on('telemetric response', message => {
        cb(message)
    })
}

export { connect }