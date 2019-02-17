import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { TaskHistory } from '../index.js'
import TriggerEthPriceDropCard from '../Card/Cards/triggerEthPriceDropCard'
import ActionTransferCard from '../Card/Cards/actionTransferCard'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import axios from 'axios'
import styled from 'styled-components'

function renderTriggerCard(task) {
	if(task.triggerId === 'eth-price-below') {
		return (
			<TriggerEthPriceDropCard task={task} isDisplay />
		)
	}
	else {
		return (
			<TriggerEthPriceDropCard task={task} isDisplay isTask/>
		)		
	}
} 

function renderActionCard(task) {
	if(task.triggerId === 'transfer-eth') {
		return (
			<ActionTransferCard task={task} isDisplay isTask />
		)
	}
	else {
		return (
			<ActionTransferCard task={task} isDisplay isTask/>
		)		
	}
}

const StyledFormGroup = styled(FormGroup)`
  margin-left: -90px;
  z-index: 99;
`

const ExpansionPanelSummary = withStyles({
  root: {
    margin: '0',
    padding: '0',
    boxShadow: 'none',
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
  	margin: '0',
    '&$expanded': {
      margin: '0',
    },
  },
  expanded: {},
})(props => <MuiExpansionPanelSummary {...props} />);

ExpansionPanelSummary.muiName = 'ExpansionPanelSummary';

function Task({ task, ...props}) {
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState(task.isActive);
  const handleChange = async (e) => {
    setActive(!active)
    const res = await axios.put(`https://d0ob9xv927.execute-api.us-east-1.amazonaws.com/dev/tasks/${task.id}`,{
      isActive: !active
    })
    console.log(res)
    // handle api call
  }

  return (
  	<div className={`flex mb10`}>
      <ExpansionPanel expanded={expanded} onChange={() => setExpanded(!expanded)}>
        <ExpansionPanelSummary>
  				{ renderTriggerCard(task) }
  				{ renderActionCard(task) }
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <TaskHistory task={task}/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <StyledFormGroup>
  			<FormControlLabel
          control={ <Checkbox color="default" checked={active} /> }
          onChange={handleChange}
        	label="Active"
      	/>
      </StyledFormGroup>
  	</div>
  );
}

export default Task;


