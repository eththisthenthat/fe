import React, { useState } from 'react';
import { TaskHistory } from '../index.js'
import TriggerEthPriceDropCard from '../Card/Cards/triggerEthPriceDropCard'
import ActionTransferCard from '../Card/Cards/actionTransferCard'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';

function renderTriggerCard() {
	return (
		<TriggerEthPriceDropCard isDisplay />
	)
} 

function renderActionCard() {
	return (
		<ActionTransferCard isDisplay />
	)
} 

function Task(props) {
  const { isDisplay } = props;
  const [expanded, setExpanded] = useState(false);

  return (
  	<div className='flex'>
      <ExpansionPanel expanded={expanded} onChange={() => setExpanded(!expanded)}>
        <ExpansionPanelSummary style={{padding: 0, margin: 0}}>
  				{ renderTriggerCard() }
  				{ renderActionCard() }
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <TaskHistory />
        </ExpansionPanelDetails>
      </ExpansionPanel>
  	</div>
  );
}

export default Task;


