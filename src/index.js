import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.scss'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './themes/Default/themeOptions'
import CssBaseline from '@material-ui/core/CssBaseline'

ReactDOM.render(
    <ThemeProvider theme={theme}><CssBaseline /><App /></ThemeProvider>, document.getElementById('root')
)
