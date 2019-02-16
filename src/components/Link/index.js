import React from 'react'
import { Link } from "react-router-dom";
export default (props) => {
  return <Link className={'noUnderline ' + props.className} {...props} />
}