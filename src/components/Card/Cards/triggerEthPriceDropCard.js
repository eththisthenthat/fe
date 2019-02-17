import React, {useState} from 'react'
import Card from '../index.js'
import Typography from '@material-ui/core/Typography';
import triggers from '../../../store/staticTriggers'
import Input from '../../Input'

function TriggerEthPriceDropCard({ isDisplay, price, enableInputs, ...props}) {

  const title = `ETH prices drop below${isDisplay ? ':' : ''}`;
  const color = "red";
  const [values, setValues] = useState({})
  const fields = triggers.find(trigger => trigger.type === 'ethPriceDrop').fields
  const handleChange = (field,e) => {
    setValues({
      ...values,
      [field.name]: e.target.value
    })
  }

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
          : enableInputs && <Input 
            onChange={handleChange.bind(this,field)} 
            key={field.name} 
            value={values[field.name]}
            label={field.name} 
            type={field.type} 
            />
      })}
  	</Card>
  );
}

export default TriggerEthPriceDropCard;
