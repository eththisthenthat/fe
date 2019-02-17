import { createMuiTheme } from '@material-ui/core/styles'
/*
*
* Blends and Meshes global style settings
* for use in styled components
*
*/

const baseColors = {
  white:        '#ffffff',
  gray10:       '#F4F4F4',
  gray20:       '#E6E6E6',
  gray35:       '#B6B6B6',
  gray:         '#B6B6B6',
  gray50:       '#8E8E8E',
  gray85:       '#4A4A4A',
  black:        '#333333',
  red:          '#f3404e',
  orange:       '#f3b805',
  purple:       '#6039f1',
  blue:         '#337DF4',
  blueDark:     '#093479',
  green:        '#00A86B',
  greenLightest:'#D9F7EC',
  magenta:       '#ea00a5'
}

const namedColors = {
  success: baseColors.green,
  error: baseColors.red,
  warning: baseColors.orange,
  info: baseColors.purple
}

export const colors = {
  ...baseColors,
  ...namedColors,
  text: baseColors.grayDarker,
  highlight: baseColors.greenLightest
}

const baseIndex = 120000 // setting high to override any rouge bootstrap and other library z-indexes
const z = {
  header: baseIndex
}

const dimensions = {
  navbarHeight: 50
}

const other = {
  borderRadius: '5px'
}

export const boxShadow = {
  default: '0px 2px 40px rgb(33, 33, 33, .16), 0px 4px 6px rgb(33, 33, 33, .18)',
  tight: '0 2px 4px 0 rgba(0,0,0,0.25)',
  loose: `0 3px 20px 0 rgba(33,33,33,0.18)`,
  inset: `inset 0 1px 3px 0  rgba(0,0,0,0.25)`
}

export const fonts = {
  default: "'Open Sans', sans-serif",
}

export const muiTheme = createMuiTheme({
  typography: {
    fontFamily: fonts.default,
    useNextVariants: true,
    fontSize: 14
  },
  overrides: {
    MuiIcon: { root: { fontSize: 14 }}
  }
})

export const screenSizes = {
  smaller:  '420px',
  small:  '576px',
  medium: '768px',
  large: '1024px',
  larger: '1200px',
  largest: '1440px',
  huge: '1820px'
}

const theme = {
  ...colors,
  ...dimensions,
  ...other,
  ...screenSizes,
  fonts,
  z,
  boxShadow
}

export default theme
