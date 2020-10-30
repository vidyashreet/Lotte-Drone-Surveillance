// BASE COLORS
// Base colors are not meant to be exported.
// Their variable names come from Figma or Material Design palette.
// eg https://www.figma.com/file/TvnfcR4b15UPsSTVAxy0EK/Wiley-Design-System?node-id=160%3A8
const white100 = '#FFFFFF'
const white200 = '#DADCE0'
const white300 = '#ADACAC'
const blue50 = '#DFF6FF'
const blue500 = '#1F2941'
const indigo900 = '#46A048'
const green50 = '#E6F1E6'
const green500 = '#385F39'
const green600 = '#3C763D'
const red50 = '#FBEBEA'
const red500 = '#DD4F46'
const red600 = '#A94442'
const yellow50 = '#FEFAF0'
const yellow100 = '#FCF0D2'
const yellow600 = '#C9A74C'
const yellow800 = '#705D2A'
// const orange600 = '#D34500'
const orange200 = '#FFAB81'
const grey50 = '#F8F8F8'
const grey100 = '#DDDDDD'
const grey200 = '#CCCCCC'
const grey300 = '#ABABAB'
const grey400 = '#727272'
const grey500 = '#585858'
const grey600 = '#484848'
const grey700 = '#3B3B3B'
const grey800 = '#2E2E2E'
const grey900 = '#212121'
const greyA100 = '#D5D5D5'
const greyA200 = '#AAAAAA'
const greyA400 = '#303030'
const greyA700 = '#616161'
const darkThemeInputBackground = '#394363'
const darkThemeInputHelperText = '#C4C7D0'

// INTENTION COLORS
// Intention colors should be built using the base colors above. They
// should be named with what they're used for. Material UI Theme color
// intention name is also a good choice.
export const brandPrimary = blue500
export const brandSecondary = indigo900
export const primaryContrastText = white100
export const success = green600
export const error = red600
export const warning = yellow600
export const textPrimary = grey600
export const textSecondary = grey400

// THEME PALETTE `grey` OBJECT
export const grey = {
    50: grey50,
    100: grey100,
    200: grey200,
    300: grey300,
    400: grey400,
    500: grey500,
    600: grey600,
    700: grey700,
    800: grey800,
    900: grey900,
    A100: greyA100,
    A200: greyA200,
    A400: greyA400,
    A700: greyA700
}

// THEME PALETTE `red` OBJECT
export const red = {
    50: red50,
    500: red500,
    600: red600
}

// THEME PALETTE `blue` OBJECT
export const blue = {
    50: blue50,
    500: blue500
}

// THEME PALETTE `green` OBJECT
export const green = {
    50: green50,
    500: green500,
    600: green600
}

// THEME PALETTE `yellow` OBJECT
export const yellow = {
    50: yellow50,
    100: yellow100,
    600: yellow600,
    800: yellow800
}

// THEME PALETTE `white` OBJECT
export const white = {
    100: white100,
    200: white200,
    300: white300
}

// THEME PALETTE `orange` OBJECT
export const orange = {
    200: orange200
}

// THEME PALETTE Dark Theme OBJECT
export const darkTheme = {
    inputBackground: darkThemeInputBackground,
    inputHelperText: darkThemeInputHelperText
}
