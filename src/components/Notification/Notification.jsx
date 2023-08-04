import React from 'react';
import PropTypes from 'prop-types';

import style from './Notification.module.css';


export default function Notification({message}) {
  return (
    <div className={style.message}>{message}</div>
  )
}

Notification.propTypes = {
    message: PropTypes.string,
 };