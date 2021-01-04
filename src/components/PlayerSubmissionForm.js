import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = () => {

  const [formFields, setFormFields] = useState({
    adj: '',
    noun: '', 
    adverb: '', 
    verb: '', 
    adj2: '',
    noun2: '',
  });

  const [player, setPlayer] = useState(1);

  const onInputChange = (event) => {
    // console.log(`Changing field ${ event.target.name } to ${ event.target.value }`);
    // // Duplicate formFields into new object
    const newFormFields = {
      ...formFields,
    }
  
    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
  }

  const onFormSubmit = (event) => {
    // prevent the browser from trying to submit the form.
    event.preventDefault();
  
    // ... We need to change form state.
    setFormFields({
      adj: '',
      noun: '', 
      adverb: '', 
      verb: '', 
      adj2: '',
      noun2: '',
    });
    
    setPlayer(player + 1);
  };

  return (
    <div className="PlayerSubmissionForm" 
    >
      <h3>Player Submission Form for Player #{}</h3>

      <form className="PlayerSubmissionForm__form" >

        <div className="PlayerSubmissionForm__poem-inputs">

          {
            // Put your form inputs here... We've put in one below as an example
          }

        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}

PlayerSubmissionForm.propTypes = {
  index: PropTypes.number.isRequired,
  sendSubmission: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }),
  ])).isRequired,
}

export default PlayerSubmissionForm;
