import React from 'react'
import { Container } from '../../components'
import TriggerEthPriceDropCard from '../../components/Card/Cards/triggerEthPriceDropCard'
import ActionTransfer from '../../components/Card/Cards/actionTransfer'

export default () => {
  return <Container>
  	<h2>My Tasks</h2>
  	<TriggerEthPriceDropCard isDisplay={true} price={100} />
  	<TriggerEthPriceDropCard isDisplay={false} price={100} />
  	<ActionTransfer isDisplay={true} />
  	<ActionTransfer isDisplay={false} />
  </Container>
}