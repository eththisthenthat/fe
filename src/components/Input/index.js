import { TextField } from '@material-ui/core'
import React from 'react'
export default ({ inline, value = '', ...props }) => <TextField
  variant="filled"
  margin='normal'
  value={value}
  fullWidth={inline ? false : true}
  InputProps={{
    style: {
      lineHeight: 'normal',
    }
  }}
  {...props}
/>
