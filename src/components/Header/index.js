import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Blockie } from 'rimble-ui'
import { get } from "lodash";
import { useGlobalState } from '../../store'
import { Link } from "react-router-dom";
import {  PlayArrow } from '@material-ui/icons'
export default () => {
    const [value] = useGlobalState('ethereum');
    const hash = get(value, 'web3.eth.defaultAccount')
    return <AppBar position="static">
    <Toolbar >
      <PlayArrow />
      <Typography variant="h6" color="inherit"><Link to='/'>Ethttt</Link></Typography>
      <Typography><Link to='/tasks'>Tasks</Link></Typography>
      {hash && <Typography variant="h6" color="inherit">
        <Blockie opts={{seed: hash, color: "#dfe", bgcolor: "#a71", size: 15, scale: 3, spotcolor: "#000"}} />
        {hash}
        </Typography>
      }
    </Toolbar>
  </AppBar>
  }