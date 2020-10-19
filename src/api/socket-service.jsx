import openSocket from 'socket.io-client'

const socket = openSocket('http://18.189.160.225:1936/')

// const socket = openSocket('http://18.189.160.225:1936/')

function connect (cb) {
    socket.on('telemetric response', message => {
        cb(message)
    })
}

export { connect }