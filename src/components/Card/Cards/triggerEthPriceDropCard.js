import React from 'react'
import Card from '../index.js'
import Typography from '@material-ui/core/Typography';

function TriggerEthPriceDropCard(props) {
  const { isDisplay, price } = props;

  const title = `ETH prices drop below${isDisplay ? ':' : ''}`;
  const color = "red";

  return (
  	<Card
  		title={title}
  		color={color}
  		isTrigger={true}
  		isDisplay={isDisplay}>
      { isDisplay ? 
        (
      		<div>
            <Typography className={`txt-white mt${10}`} gutterBottom>
              Price
            </Typography>
        		<Typography variant="h5" component="h2" className={'txt-white'}>
              {price}
            </Typography>
          </div>
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

export default TriggerEthPriceDropCard;
