import React, {useState} from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { useGlobalState } from '../../store'
import { Container } from '../../components'
import triggers from '../../store/staticTriggers'
import actions from '../../store/staticActions'
import getCardViaType from '../../utils/getCardViaType'
import ComingSoonCard from '../../components/Card/Cards/comingSoonCard'
import Button from '@material-ui/core/Button';
import axios from 'axios'
import { omit, get } from 'lodash'

const Scrollable = styled.div`
  height: 100%;
  max-height: 800px;
  overflow: scroll;
`
const StyledButton = styled(Button)`
  margin-top: 20px !important;
  color: ${({ theme }) => theme.white } !important;
  font-weight: 900 !important;
  border-color: ${({ theme }) => theme.white } !important;
`
const CreateButton = (props) => <StyledButton 
  variant="outlined" 
  fullWidth
  {...props}>
  Create
</StyledButton>

export default withRouter((props) => {
  console.log('props', props)
  const [selectedTrigger, setSelectedTrigger] = useState({})
  const [selectedAction, setSelectedAction] = useState({})
  const [ethereum] = useGlobalState('ethereum');
  const hash = get(ethereum, 'web3.eth.defaultAccount')
  const handleChange = (values, name, cardType) => {
    if(cardType === 'action') setSelectedAction({ type: name, ...values })
    if(cardType === 'trigger') setSelectedTrigger({ type: name, ...values })
  }

  const handleClick = () => {
    console.log(selectedTrigger, selectedAction)
    axios.post('https://d0ob9xv927.execute-api.us-east-1.amazonaws.com/dev/tasks',
      {
        "triggerId": selectedTrigger.type,
        "actionId": selectedAction.type,
        "address": hash,
        "isActive": true,
        "triggerMeta": {...omit(selectedTrigger, 'type')},
        "actionMeta": {...omit(selectedAction, 'type')},
    } ).then( res => {
      props.history.push('/tasks')
    })
  }

  return <Container className='f-jcsa'>
    <div className='flex'>
      <div className='mr20'>
        <h2>Select Trigger</h2>
        <Scrollable>
          {triggers.map(trigger => {
            const TriggerCard = getCardViaType(trigger.type) 
            return <TriggerCard 
              onClick={()=>setSelectedTrigger({type: trigger.type})}
              enableInputs={trigger.type === selectedTrigger.type} 
              disabled={selectedTrigger.type && trigger.type !== selectedTrigger.type} 
              onChange={handleChange}
              key={trigger.type} 
              className='mb10 pointer' />
          })}
          <ComingSoonCard disabled={selectedTrigger.type} isTrigger={true} title="Every ETH block mined" color="purple" />
          <ComingSoonCard disabled={selectedTrigger.type} isTrigger={true} title="Contract Event fires" color="green" />
          <ComingSoonCard disabled={selectedTrigger.type} isTrigger={true} title="Token transfer occurs" color="blueDark" />
        </Scrollable>
      </div>
      <div>
        <h2>Select Action</h2>
        <Scrollable>
          {actions.map(action=> {
            const ActionCard = getCardViaType(action.type) 
            return <ActionCard
              onClick={()=>setSelectedAction({type: action.type})}
              enableInputs={action.type === selectedAction.type} 
              disabled={selectedAction.type && (action.type !== selectedAction.type)} 
              key={action.type} 
              onChange={handleChange}
              className='mb10 pointer'>
                {selectedAction.type && selectedTrigger.type && <CreateButton onClick={handleClick} />}
              </ActionCard>
          })}
          <ComingSoonCard disabled={selectedAction.type} title="Add collateral to CDP" color="magenta" />
          <ComingSoonCard disabled={selectedAction.type} title="Send SMS Message" color="orange" />
          <ComingSoonCard disabled={selectedAction.type} title="Send Email" color="black" />
        </Scrollable>
        </div>
      </div>
    </Container>
})