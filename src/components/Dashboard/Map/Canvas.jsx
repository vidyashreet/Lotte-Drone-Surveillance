import React, { PureComponent } from 'react'
import Box from '@material-ui/core/Box'
import PropTypes from 'prop-types'

class Canvas extends PureComponent {

    componentDidMount () {
        const { mapViewData } = this.props
        const { canvas } = this.refs
        const ctx = canvas.getContext('2d')
        const w = ctx.canvas.width
        const h = ctx.canvas.height
        ctx.font = '10px Arial'
        ctx.fillStyle = '#DADCE0'
        ctx.fillText('z', 39, 286)
        ctx.fillText('x', 27, 300)
        ctx.fillText('5m', 320, 313)
        ctx.fillText('5m', 335, 300)
        for (let x = 0; x < w; x += 35) {
            if (x === 0) {
                ctx.moveTo(x, 0)
                ctx.lineTo(x, 0)
            } else {
                ctx.moveTo(x, 0)
                ctx.lineTo(x, h)
            }
        }

        for (let y = 0; y < h; y += 32) {
            if (y === 0) {
                ctx.moveTo(0, y)
                ctx.lineTo(0, y)
            } else {
                ctx.moveTo(0, y)
                ctx.lineTo(w, y)
            }
        }
        ctx.strokeStyle = '#DADCE0'
        ctx.stroke()
//         mapViewData.map(image => {
//             const droneImg = new Image()
//             droneImg.onload = function () {
//                 ctx.drawImage(this, image.x, image.y, 20, 20)
//             }
//             droneImg.src = image.uri
//         })
        mapViewData.map((image, index) => {
        if(index > 2) {
            if(!image.deviation) {
                ctx.beginPath();
                ctx.moveTo(image.x, image.y);
                ctx.lineTo(image.x+15, image.y+15);
                ctx.closePath();
                ctx.strokeStyle = image.color;
                ctx.lineWidth = 5;
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(image.x+15, image.y);
                ctx.lineTo(image.x, image.y+15);
                ctx.closePath();
                ctx.stroke();
                ctx.fillText(image.id, image.x+5, image.y+27)
                ctx.font = 'bold 8pt Arial'
                }
                else {
                ctx.beginPath();
                ctx.rect(image.x, image.y, 3, 23);
                ctx.strokeStyle = image.color;
                ctx.lineWidth = 2;
                ctx.closePath();
                ctx.stroke();
                ctx.beginPath();
                ctx.rect(image.x-10, image.y+10, 23, 3);
                ctx.strokeStyle = image.color;
                ctx.closePath();
                ctx.stroke();
                }
        }
        else {
            const droneImg = new Image()
            droneImg.onload = function () {
                ctx.drawImage(this, image.x, image.y, 20, 20)
            }
            droneImg.src = image.uri
        }
       })
    }

    componentDidUpdate () {
        this.canvasGrid()
    }

    canvasGrid () {
        const { mapViewData } = this.props
        const { canvas } = this.refs
        const ctx = canvas.getContext('2d')
        const w = ctx.canvas.width
        const h = ctx.canvas.height
        ctx.clearRect(0, 0, w, h)
        ctx.beginPath()
        ctx.font = '10px Arial'
        ctx.fillStyle = '#DADCE0'
        ctx.fillText('z', 39, 286)
        ctx.fillText('x', 27, 300)
        ctx.fillText('5m', 320, 313)
        ctx.fillText('5m', 335, 300)
        ctx.lineWidth = 1;
        for (let x = 0; x < w; x += 35) {
            if (x === 0) {
                ctx.moveTo(x, 0)
                ctx.lineTo(x, 0)
            } else {
                ctx.moveTo(x, 0)
                ctx.lineTo(x, h)
            }
        }

        for (let y = 0; y < h; y += 32) {
            if (y === 0) {
                ctx.moveTo(0, y)
                ctx.lineTo(0, y)
            } else {
                ctx.moveTo(0, y)
                ctx.lineTo(w, y)
            }
        }
        ctx.strokeStyle = '#DADCE0'
        ctx.stroke()
        mapViewData.map((image, index) => {
        if(index > 2) {
            if(!image.deviation) {
                ctx.beginPath();
                ctx.moveTo(image.x, image.y);
                ctx.lineTo(image.x+15, image.y+15);
                ctx.closePath();
                ctx.strokeStyle = image.color;
                ctx.lineWidth = 5;
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(image.x+15, image.y);
                ctx.lineTo(image.x, image.y+15);
                ctx.closePath();
                ctx.stroke();
                ctx.fillText(image.id, image.x+5, image.y+27)
                ctx.font = 'bold 8pt Arial'
                }
                else {
                ctx.beginPath();
                ctx.rect(image.x, image.y, 3, 23);
                ctx.strokeStyle = image.color;
                ctx.lineWidth = 2;
                ctx.closePath();
                ctx.stroke();
                ctx.beginPath();
                ctx.rect(image.x-10, image.y+10, 23, 3);
                ctx.strokeStyle = image.color;
                ctx.closePath();
                ctx.stroke();
                }
        }
        else {
            const droneImg = new Image()
            droneImg.onload = function () {
                ctx.drawImage(this, image.x, image.y, 20, 20)
            }
            droneImg.src = image.uri
        }
       })
    }

    render () {
        const { width, height } = this.props
        return (
            <Box>
                <canvas ref="canvas" width={width} height={height} />
            </Box>
        )
    }
}

Canvas.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    mapViewData: PropTypes.array
}

export default Canvas
