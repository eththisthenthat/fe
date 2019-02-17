import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { TaskHistory } from '../index.js'
import TriggerEthPriceDropCard from '../Card/Cards/triggerEthPriceDropCard'
import ActionTransferCard from '../Card/Cards/actionTransferCard'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import styled from 'styled-components'

function renderTriggerCard(task) {
	if(task.triggerId === 'eth-price-below') {
		return (
			<TriggerEthPriceDropCard task={task} isDisplay />
		)
	}
	else {
		return (
			<TriggerEthPriceDropCard task={task} isDisplay />
		)		
	}
} 

function renderActionCard(task) {
	if(task.triggerId === 'transfer-eth') {
		return (
			<ActionTransferCard task={task} isDisplay />
		)
	}
	else {
		return (
			<ActionTransferCard task={task} isDisplay />
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

function Task(props) {
  const { isDisplay, task, isActive } = props;
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState(isActive);

  return (
  	<div className={`flex mb10`}>
      <ExpansionPanel expanded={expanded} onChange={() => setExpanded(false)}>
        <ExpansionPanelSummary>
  				{ renderTriggerCard(task) }
  				{ renderActionCard(task) }
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <TaskHistory />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <StyledFormGroup>
  			<FormControlLabel
          control={
            <Checkbox color="default" value="checkedG" />
          }
        	label="Active"
      	/>
      </StyledFormGroup>
  	</div>
  );
}

export default Task;


