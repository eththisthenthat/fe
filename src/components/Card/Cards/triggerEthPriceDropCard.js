import React from 'react'
import Card from '../index.js'
import Typography from '@material-ui/core/Typography';
import triggers from '../../../store/staticTriggers'
import Input from '../../Input'

function TriggerEthPriceDropCard({ isDisplay, price, inputsEnabled, ...props}) {

  const title = `ETH prices drop below${isDisplay ? ':' : ''}`;
  const color = "red";
  const fields = triggers.find(trigger => trigger.type === 'ethPriceDrop').fields

  return (
  	<Card
  		title={title}
  		color={color}
  		isTrigger
  		isDisplay={isDisplay}
      {...props}>
      {fields.map(field => {
        return isDisplay 
          ? <Typography key={field.name}>{field.name}</Typography> 
          : inputsEnabled && <Input key={field.name} label={field.name} type={field.type} />
      })}
  	</Card>
  );
}

export default TriggerEthPriceDropCard;
