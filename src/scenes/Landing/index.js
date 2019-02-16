import React from 'react'
import { Container } from '../../components'
import TriggerEthPriceDropCard from '../../components/Card/Cards/triggerEthPriceDropCard'
import ActionTransferCard from '../../components/Card/Cards/actionTransferCard'

export default () => {
  return <Container>
  	<h2>My Tasks</h2>
  	<TriggerEthPriceDropCard isDisplay={true} price={100} />
  	<TriggerEthPriceDropCard isDisplay={false} price={100} />
  	<ActionTransferCard isDisplay={true} />
  	<ActionTransferCard isDisplay={false} />
  </Container>
}