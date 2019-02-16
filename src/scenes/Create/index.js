import React from 'react'
import styled from 'styled-components'
import { Container } from '../../components'
import TriggerEthPriceDropCard from '../../components/Card/Cards/triggerEthPriceDropCard'
import ActionTransfer from '../../components/Card/Cards/actionTransfer'

const Scrollable = styled.div`
  height: 100%;
  max-height: 800px;
  overflow: scroll;
`
export default () => {
  return <Container className='flex'>
    <div className='mr20'>
      <h2>Triggers</h2>
      <Scrollable>
        <TriggerEthPriceDropCard isDisplay={true} price={100} />
        <TriggerEthPriceDropCard isDisplay={true} price={100} />
        <TriggerEthPriceDropCard isDisplay={true} price={100} />
        <TriggerEthPriceDropCard isDisplay={true} price={100} />
        <TriggerEthPriceDropCard isDisplay={true} price={100} />
        <TriggerEthPriceDropCard isDisplay={true} price={100} />
        <TriggerEthPriceDropCard isDisplay={true} price={100} />
        <TriggerEthPriceDropCard isDisplay={true} price={100} />
        <TriggerEthPriceDropCard isDisplay={true} price={100} />
        <TriggerEthPriceDropCard isDisplay={true} price={100} />
        <TriggerEthPriceDropCard isDisplay={true} price={100} />
        <TriggerEthPriceDropCard isDisplay={true} price={100} />
      </Scrollable>
    </div>
    <Scrollable>
      <h2>Actions</h2>
      <ActionTransfer isDisplay={true} />
    </Scrollable>
    </Container>
}