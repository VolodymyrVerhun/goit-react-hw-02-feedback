import React from 'react';
import PropTypes from 'prop-types';

import style from './FeedbackOptions.module.css'

export default function FeedbackOptions({options, onLeaveFeedback}) {
  return (
            <div className={style.feedback__block}>
                <h1 className={style.feedback__title}>Please leave feedback</h1>
                {options.map(option => {
                    return (
                    <button className={style.feedback__btn} key={option} onClick={onLeaveFeedback} name={option}>
                        {option}
                    </button>)
                })}
            </div>
  )
};


FeedbackOptions.propTypes = {
options: PropTypes.arrayOf(PropTypes.string),
onLeaveFeedback: PropTypes.func,
};