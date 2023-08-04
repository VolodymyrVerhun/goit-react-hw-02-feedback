import React from 'react';
import PropTypes from 'prop-types';

import style from './Statistics.module.css';


export default function Statistics({good, bad, neutral, total, positivePercentage}) {
  return (
        <div className={style.stat__block}>
            <p>Good: {good}</p>
            <p>Bad: {bad}</p>
            <p>Neutral: {neutral}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {positivePercentage}%</p>
        </div>
  )
}

Statistics.propTypes = {
    good: PropTypes.number,
    bad: PropTypes.number,
    neutral: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.string,
    };