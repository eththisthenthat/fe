import React, {useState} from 'react'
import styled from 'styled-components'
import { Container } from '../../components'
import triggers from '../../store/staticTriggers'
import actions from '../../store/staticActions'
import getCardViaType from '../../utils/getCardViaType'

const Scrollable = styled.div`
  height: 100%;
  max-height: 800px;
  overflow: scroll;
`
export default () => {
  const [selected, setSelected] = useState('')
  return <Container className='flex'>
    <div className='mr20'>
      <h2>Select Trigger</h2>
      <Scrollable>
        {triggers.map(trigger => {
          const TriggerCard = getCardViaType(trigger.type) 
          return <TriggerCard 
            onClick={()=>setSelected(trigger.type)}
            enableInputs={trigger.type === selected} 
            disabled={selected && trigger.type !== selected} 
            key={trigger.type} 
            className='mb10 pointer' />
        })}
      </Scrollable>
    </div>
    <div>
      <h2>Select Action</h2>
      <Scrollable>
        {actions.map(action=> {
          const ActionCard = getCardViaType(action.type) 
          return <ActionCard key={action.type} className='mb10' />
        })}
      </Scrollable>
      </div>
    </Container>
}