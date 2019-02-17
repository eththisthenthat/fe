import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {  PlayArrow } from '@material-ui/icons'
import styled from 'styled-components'

const StyledArrow = styled(PlayArrow)`
position: absolute;
z-index: 1;
top: 50%;
transform: translateY(-50%);
font-size: 60px !important;
right: -38px;
`

const StyledCard = styled(Card)`
  min-width: 350px;
  opacity: ${(props) => props['data-disabled'] && '.3' };
  transform: ${(props) => props['data-disabled'] && 'scale(.9)' };
  & + & {
    padding-left: ${(props) => props['data-trigger'] && !props['data-display'] ? 'inherit' : '30px' };
  }
  border-top-right-radius: ${(props) => (props['data-display'] && props['data-trigger']) ? 0 : '' } !important;
  border-bottom-right-radius: ${(props) => (props['data-display'] && props['data-trigger']) ? 0 : '' } !important;
  border-top-left-radius: ${(props) => (props['data-display'] && !props['data-trigger']) ? 0 : '' } !important;
  border-bottom-left-radius: ${(props) => (props['data-display'] && !props['data-trigger']) ? 0 : '' } !important;
}
`

function SimpleCard({ title, color, isTrigger, isDisplay, className, disabled, ...props }) {
  return (
    <StyledCard 
      data-display={isDisplay}
      data-trigger={isTrigger}
      data-disabled={disabled}
      className={`bg-${color} ${isDisplay ? '' : 'mb10'} relative overflow-visible ${className || ''}`} 
      {...props}
      >
      <CardContent>
        <Typography className={`txt-white`} gutterBottom>
          {isDisplay ? (isTrigger ? "Trigger" : "Action") : (isTrigger ? "Trigger when:" : "Perform action:") }
        </Typography>
        <Typography variant="h5" component="h2" className={'txt-white'}>
          {title}
        </Typography>
        {props.children}
      </CardContent>
        {isDisplay && isTrigger && (<StyledArrow className={`txt-${color}`} />)}
    </StyledCard>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles({})(SimpleCard);
