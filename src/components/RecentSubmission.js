import React from 'react';
import PropTypes from 'prop-types';
import './RecentSubmission.css';

const RecentSubmission = (props) => {
  const recent = props.recentSubmission.map((field, i) => {
    const { adj, noun, adverb, verb, adj2, noun2 } = field

    const line = `The ${adj} ${noun} ${adverb} ${verb} the ${adj2} ${noun2}.` 
      return <p key={i}> {line}</p>;
    }

  );

  if ( props.showRecent === false) {
  return (null);
  } else {
    return (
    <div className="RecentSubmission">
    <h3>The Most Recent Submission</h3>
    <p className="RecentSubmission__submission">{recent[recent.length-1]}</p>
  </div>
    )
  }
}

RecentSubmission.propTypes = {
  submission: PropTypes.string.isRequired,
};

export default RecentSubmission;
