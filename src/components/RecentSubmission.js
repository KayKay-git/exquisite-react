import React from 'react';
import PropTypes from 'prop-types';
import './RecentSubmission.css';

const RecentSubmission = (props) => {

  if ( props.showRecent === false || props.submission <= 0 ) {
  return (null);
  } else {
    return (
    <div className="RecentSubmission">
    <h3>The Most Recent Submission</h3>
    <p className="RecentSubmission__submission">{props.submission[props.submission.length - 1]}</p>
  </div>
    )
  }
}

RecentSubmission.propTypes = {
  submission: PropTypes.string.isRequired,
};

export default RecentSubmission;
