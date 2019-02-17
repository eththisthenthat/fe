import React from 'react'
import styled from 'styled-components'
import { Container } from '../../components'
import triggers from '../../store/staticTriggers'
import actions from '../../store/staticActions'
import getCardViaType from '../../utils/getCardViaType'
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
        {triggers.map(trigger => {
          const TriggerCard = getCardViaType(trigger.type) 
          return <TriggerCard key={trigger.type} className='mb10' />
        })}
        <ComingSoonCard title="Contract Event fires" color="green" />
        <ComingSoonCard title="Token transfer occurs" color="blueDark" />
      </Scrollable>
    </div>
    <div>
      <h2>Select Action</h2>
      <Scrollable>
        {actions.map(action=> {
          const ActionCard = getCardViaType(action.type) 
          return <ActionCard key={action.type} className='mb10' />
        })}
        <ComingSoonCard title="Send SMS Message" color="orange" />
        <ComingSoonCard title="Send Email" color="black" />
      </Scrollable>
      </div>
    </Container>
}