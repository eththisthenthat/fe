import React from 'react'
import styled from 'styled-components'
import { Container } from '../../components'
import TriggerEthPriceDropCard from '../../components/Card/Cards/triggerEthPriceDropCard'
import ActionTransferCard from '../../components/Card/Cards/actionTransferCard'
import ComingSoonCard from '../../components/Card/Cards/comingSoonCard'

const Scrollable = styled.div`
  height: 100%;
  max-height: 800px;
  overflow: scroll;
`
export default () => {
  return <Container className='flex'>
    <div className='mr20'>
      <h2>Select Trigger</h2>
      <Scrollable>
        <TriggerEthPriceDropCard isDisplay={true} price={100} />
        <ComingSoonCard title={"Contract Event fires"} color={"orange"} isTrigger={true} />
        <ComingSoonCard title={"Token transfer occurs"} color={"purple"} isTrigger={true} />
        <ComingSoonCard title={"Token transfer occurs"} color={"purple"} isTrigger={true} />
        <ComingSoonCard title={"Token transfer occurs"} color={"purple"} isTrigger={true} />
        <ComingSoonCard title={"Token transfer occurs"} color={"purple"} isTrigger={true} />
        <ComingSoonCard title={"Token transfer occurs"} color={"purple"} isTrigger={true} />
        <ComingSoonCard title={"Token transfer occurs"} color={"purple"} isTrigger={true} />
      </Scrollable>
    </div>
    <Scrollable>
      <h2>Select Action</h2>
      <ActionTransferCard isDisplay={true} />
      <ComingSoonCard title={"Send SMS"} color={"green"} isTrigger={false} />
      <ComingSoonCard title={"Send Email"} color={"blue"} isTrigger={false} />
      <ComingSoonCard title={"Send Email"} color={"blue"} isTrigger={false} />
      <ComingSoonCard title={"Send Email"} color={"blue"} isTrigger={false} />
      <ComingSoonCard title={"Send Email"} color={"blue"} isTrigger={false} />
      <ComingSoonCard title={"Send Email"} color={"blue"} isTrigger={false} />
      <ComingSoonCard title={"Send Email"} color={"blue"} isTrigger={false} />
    </Scrollable>
    </Container>
}