import React, { useState } from 'react'
import Card from '../index.js'
import Typography from '@material-ui/core/Typography';
import actions from '../../../store/staticActions'
import Input from '../../Input'
import { get } from 'lodash'

function ActionTransfer({ isDisplay, amount, toAddress, enableInputs, children, onChange, task, ...props }) {

  const title = `Transfer ETH${isDisplay ? ':' : ''}`;
  const color = "blue";
  const [values, setValues] = useState({})
  const fields = actions.find(action => action.type === 'eth-transfer').fields
  const handleChange = (field,e) => {
    const newValues = {
      ...values,
      [field.name]: e.target.value
    }
    setValues(newValues)
    onChange && onChange(newValues, 'eth-transfer', 'action')
  }

  return (
  	<Card
  		title={title}
  		color={color}
  		isTrigger={false}
      isDisplay={isDisplay}
      {...props}>
      { isDisplay ?
        <div>
          <Typography className={`txt-white mt${10}`} gutterBottom>
            Amount
          </Typography>
          <Typography variant="h5" component="h2" className={'txt-white'}>
            {get(task, 'actionMeta.amount')}
          </Typography>
          <Typography className={`txt-white mt${10}`} gutterBottom>
            To
          </Typography>
          <Typography variant="h5" component="h2" className={'txt-white'}>
            {get(task, 'actionMeta.address')}
          </Typography>
        </div> : enableInputs && fields.map(field => {
                return <Input 
                  onChange={handleChange.bind(this,field)} 
                  key={field.name} 
                  value={values[field.name]}
                  label={field.name} 
                  type={field.type} 
                />
          })
      }
      {children}
  	</Card>
  );
}

export default ActionTransfer;