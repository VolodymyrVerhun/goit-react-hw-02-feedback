import React from 'react';
import PropTypes from 'prop-types';

import style from './Section.module.css'

export default function Section({title, children}) {
  return (
    <div className={style.section}>
        {title && <h2>{title}</h2>}
        {children}
    </div>
  )
}

Section.propTypes = {
    title: PropTypes.string,
    
    };