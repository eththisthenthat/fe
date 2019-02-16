import React from 'react'
import { Container } from '../../components'
import TriggerEthPriceDropCard from '../../components/Card/Cards/triggerEthPriceDropCard'
import ActionTransfer from '../../components/Card/Cards/actionTransferCard'
export default () => <Container>
  	<h2>My Tasks</h2>
    <div className='flex'>
    <TriggerEthPriceDropCard isDisplay={true} />
  	<ActionTransfer isDisplay />
    </div>

</Container>