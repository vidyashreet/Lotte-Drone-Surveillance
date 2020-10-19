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
        ctx.fillText('z', 40, 190)
        ctx.fillText('x', 27, 205)
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

        mapViewData.map(image => {
            const droneImg = new Image()
            droneImg.onload = function () {
                ctx.drawImage(this, image.x, image.y, 20, 20)
            }
            droneImg.src = image.uri
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
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    mapViewData: PropTypes.array
}

export default Canvas
