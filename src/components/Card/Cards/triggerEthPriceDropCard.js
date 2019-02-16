import React from 'react'
import Card from '../index.js'
import Typography from '@material-ui/core/Typography';

function TriggerEthPriceDropCard(props) {
  const { isDisplay, price } = props;

  return (
  	<Card
  		title="ETH prices drop below:"
  		color="green"
  		isTrigger={true}
  		isDisplay={isDisplay}>
  		<Typography className={`txt-white mts${5}`} gutterBottom>
        Price
      </Typography>
  		<Typography variant="h5" component="h2" className={'txt-white'}>
        {price}
      </Typography>
  	</Card>
  );
}

export default TriggerEthPriceDropCard;
