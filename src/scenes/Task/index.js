import React from 'react'
import { Container, Card } from '../../components'
import TriggerEthPriceDropCard from '../../components/Card/Cards/triggerEthPriceDropCard'
export default () => <Container>
  	<h2>My Tasks</h2>
    <div className='flex'>
    <Card 
    title="ETH prices drop below:" 
    color="blue" 
    isTrigger={true} 
    isDisplay={true}>
  	</Card>
  	<TriggerEthPriceDropCard isDisplay={false} price={100} />
    </div>

</Container>