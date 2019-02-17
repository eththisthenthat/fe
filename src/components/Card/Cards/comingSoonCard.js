import React from 'react'
import Card from '../index.js'
import Typography from '@material-ui/core/Typography';

function ComingSoonCard({ title, color, isTrigger, ...props }) {

  return (
  	<Card
  		title={title}
  		color={color}
  		isTrigger={isTrigger}
  		isDisplay={false}
      {...props}>
      <div>
        <Typography className={`txt-white mt${10}`} style= {{fontStyle: "italic"}} gutterBottom>
          Coming Soon
        </Typography>
      </div>
  	</Card>
  );
}

export default ComingSoonCard;