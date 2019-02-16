import React from 'react'
import Link from "../Link";
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Blockie } from 'rimble-ui'
import { get } from "lodash";
import { useGlobalState } from '../../store'
import {  PlayArrow } from '@material-ui/icons'
export default () => {
    const [value] = useGlobalState('ethereum');
    const hash = get(value, 'web3.eth.defaultAccount')
    return <AppBar position="static">
    <Toolbar >
      <PlayArrow />
      <Link to='/' style={{color: 'white'}}><Typography variant="h6" color="inherit">Ethttt</Typography></Link>
      <Typography><Link to='/tasks' style={{color: 'white'}}>Tasks</Link></Typography>
      {hash && <Typography variant="h6" color="inherit">
        <Blockie opts={{seed: hash, color: "#dfe", bgcolor: "#a71", size: 15, scale: 3, spotcolor: "#000"}} />
        {hash}
        </Typography>
      }
    </Toolbar>
  </AppBar>
  }