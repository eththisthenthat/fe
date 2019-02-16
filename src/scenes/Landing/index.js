import React from 'react'
import { Container } from '../../components'
import Card from '../../components/Card'
import TriggerEthPriceDropCard from '../../components/Card/Cards/triggerEthPriceDropCard'

export default () => {
  return <Container>
  	<h2>My Tasks</h2>
  	<Card title="ETH prices drop below:" color="blue" isTriggerNotAction={true} isDisplay={true}>
  	</Card>
  	<TriggerEthPriceDropCard isDisplay={false} price={100} />
  </Container>
}