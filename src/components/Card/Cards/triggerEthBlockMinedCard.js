import React from 'react'
import Card from '../index.js'
import Typography from '@material-ui/core/Typography';
import triggers from '../../../store/staticTriggers'
import Input from '../../Input'

function TriggerEthPriceDropCard({isDisplay, price, ...props}) {

  const title = `Every ETH block mined`;
  const color = "purple";
  const fields = triggers.find(trigger => trigger.type === 'ethBlockMined').fields

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
          : <Input key={field.name} label={field.name} {...field} />
      })}
  	</Card>
  );
}

export default TriggerEthPriceDropCard;
