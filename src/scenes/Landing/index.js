import React from 'react'
import { Container, Link } from '../../components'
import teampic from '../../static/team.jpg'
import Button from '@material-ui/core/Button';
export default () => {
  return <Container>
    <div className='tac'>
      <h1 style={{fontSize: '150px', margin: '40px 0 0'}}>ETHTTT</h1>
      <span>automating your blockchain transactions, inspired by IFTTT & Zapier</span>
      <Link to='/create' className='block mt40'><Button variant="contained" color='primary' size='large'>Get Started</Button></Link>
    </div>
    <div className='tac' style={{ marginTop: '150px'}}>
      Made with <span role='img' aria-label='heart'>💖</span>by
      <img src={teampic} alt='team' className='block m-x-auto w200'/>
    </div>
  </Container>
}