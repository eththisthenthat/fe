import React from 'react'
import Link from "../Link";
import Container from "../Container";
import { AppBar, Typography } from '@material-ui/core'
import shortenAddress from '../../utils/shortenAddress'
import { get } from "lodash";
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'
import { useGlobalState } from '../../store'
import {  PlayArrow } from '@material-ui/icons'
export default () => {
    const [value] = useGlobalState('ethereum');
    const hash = get(value, 'web3.eth.defaultAccount')
    return <AppBar position="static">
    <Container className="f-jcsb f-row">
    <div className='f-aic'>
      <Link to ='/' className="f-aic mr30 txt-white">
        <Typography variant="h6" className='txt-white'>eth</Typography>
        <PlayArrow />
        <Typography variant="h6" className='txt-white'>that</Typography>
      </Link>
      <Typography><Link to='/tasks' className='txt-white mr20'>Tasks</Link></Typography>
      <Typography><Link to='/create' className='txt-white'>Create</Link></Typography>
      </div>
      <div className='f-aic'>
      {hash && <> 
        <Jazzicon diameter={25} seed={jsNumberForAddress(hash)} className="mr15" />
        <Typography className='txt-white ml15'> {shortenAddress(hash)} </Typography>
        </>
      }
      </div>
      </Container>
  </AppBar>
  }