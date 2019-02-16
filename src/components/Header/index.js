import React from 'react'
import Link from "../Link";
import Container from "../Container";
import { AppBar, Typography } from '@material-ui/core'
import { Blockie } from 'rimble-ui'
import { get } from "lodash";
import { useGlobalState } from '../../store'
import {  PlayArrow } from '@material-ui/icons'
export default () => {
    const [value] = useGlobalState('ethereum');
    const hash = get(value, 'web3.eth.defaultAccount')
    return <AppBar position="static">
    <Container className="f-jcsb f-row">
    <div className='f-aic'>
      <Link to ='/' className="f-aic mr20 txt-white">
        <Typography variant="h6" className='txt-white'>eth</Typography>
        <PlayArrow />
        <Typography variant="h6" className='txt-white'>that</Typography>
      </Link>
      <Typography><Link to='/tasks' style={{color: 'white'}}>Tasks</Link></Typography>
      </div>
      <div className='f-aic'>
      {hash && <> 
        <Blockie opts={{seed: hash, color: "#dfe", bgcolor: "#a71", size: 15, scale: 3, spotcolor: "#000"}} />
        <Typography> {hash} </Typography>
        </>
      }
      </div>
      </Container>
  </AppBar>
  }