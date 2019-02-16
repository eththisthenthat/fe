import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {  PlayArrow } from '@material-ui/icons'

let styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function SimpleCard(props) {
  const { classes, title, subtitle, color, isTriggerNotAction, isDisplay } = props;

  return (
    <Card className={`bg-${color} mb${10}`}>
      <CardContent>
        <Typography className={`txt-white ${classes.title}`} gutterBottom>
          {isDisplay ? (isTriggerNotAction ? "Trigger" : "Action") : (isTriggerNotAction ? "Trigger when:" : "Perform action:") }
        </Typography>
        <Typography variant="h5" component="h2" className={'txt-white'}>
          {title}
        </Typography>
        {props.children}
      </CardContent>
        {isDisplay && isTriggerNotAction && (<PlayArrow className={`txt-${"blue"}`} fontSize="large"/>)}
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
