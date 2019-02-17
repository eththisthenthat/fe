import React, {useState} from 'react'
import Card from '../index.js'
import Typography from '@material-ui/core/Typography';
import triggers from '../../../store/staticTriggers'
import Input from '../../Input'

function TriggerEthPriceDropCard({ isDisplay, price, enableInputs, onChange, task, ...props}) {

  const title = `ETH prices drop below${isDisplay ? ':' : ''}`;
  const color = "red";
  const [values, setValues] = useState({})
  const fields = triggers.find(trigger => trigger.type === 'eth-price-below').fields
  const handleChange = (field,e) => {
    const newValues = {
      ...values,
      [field.name]: e.target.value
    }
    setValues(newValues)
    onChange && onChange(newValues, 'eth-price-below', 'trigger')
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
          ? (
              <div>
                <Typography className={`txt-white mt${10}`} gutterBottom>
                  Price
                </Typography>
                <Typography variant="h5" component="h2" className={'txt-white'}>
                  {task.triggerMeta.price}
                </Typography>
              </div>
            )
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
