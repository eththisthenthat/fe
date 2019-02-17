import React, { useState } from 'react'
import Card from '../index.js'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import actions from '../../../store/staticActions'
import Input from '../../Input'

function ActionTransfer({ isDisplay, amount, toAddress, enableInputs, children, onChange, task, ...props }) {

  const title = `Transfer ETH${isDisplay ? ':' : ''}`;
  const color = "blue";
  const [values, setValues] = useState({})
  const fields = actions.find(action => action.type === 'ethTransfer').fields
  const handleChange = (field,e) => {
    const newValues = {
      ...values,
      [field.name]: e.target.value
    }
    setValues(newValues)
    onChange && onChange(newValues, 'ethTransfer', 'action')
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
            {task.actionMeta.amount}
          </Typography>
          <Typography className={`txt-white mt${10}`} gutterBottom>
            To
          </Typography>
          <Typography variant="h5" component="h2" className={'txt-white'}>
            {task.actionMeta.address}
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
      {/* { isDisplay ? 
        (
        	<Grid container spacing={24}>
        		<Grid item xs={6}>
	            <Typography className={`txt-white mt${10}`} gutterBottom>
	              Amount
	            </Typography>
	        		<Typography variant="h5" component="h2" className={'txt-white'}>
	              {amount}
	            </Typography>
	            <Typography className={`txt-white mt${5}`} gutterBottom>
	              Token
	            </Typography>
	        		<Typography variant="h5" component="h2" className={'txt-white'}>
	              {tokenSymbol}
	            </Typography>
        		</Grid>
        		<Grid item xs={6}>
	            <Typography className={`txt-white mt${10}`} gutterBottom>
	              From
	            </Typography>
	        		<Typography variant="h5" component="h2" className={'txt-white'}>
	              {fromAddress}
	            </Typography>
	            <Typography className={`txt-white mt${5}`} gutterBottom>
	              To
	            </Typography>
	        		<Typography variant="h5" component="h2" className={'txt-white'}>
	              {toAddress}
	            </Typography>
        		</Grid>
        	</Grid>
        ) : (
          <div>
            <Typography className={`txt-white mt${10}`} gutterBottom>
              Enter Price
            </Typography>
            <Typography variant="h5" component="h2" className={'txt-white'}>
              Placeholder
            </Typography>
          </div>
        )
      } */}
  	</Card>
  );
}

export default ActionTransfer;