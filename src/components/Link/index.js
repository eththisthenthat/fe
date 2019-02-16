import React from 'react'
import { Link } from "react-router-dom";
export default (props) => {
  return <Link {...props} className={`noUnderline ${props.className || ''}`} />
}