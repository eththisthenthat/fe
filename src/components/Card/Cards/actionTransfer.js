import React from 'react'
import Card from '../index.js'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

function ActionTransfer(props) {
  const { isDisplay, amount, tokenSymbol, fromAddress, toAddress, classes } = props;

  const title = `Transfer${isDisplay ? ':' : ''}`;
  const color = "blue";

  return (
  	<Card
  		title={title}
  		color={color}
  		isTriggerNotAction={false}
  		isDisplay={isDisplay}>
      { isDisplay ? 
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
      }
  	</Card>
  );
}

export default ActionTransfer;