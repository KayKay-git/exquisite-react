import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {

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
    // Duplicate formFields into new object
    const newFormFields = {
      ...formFields,
    }
  
    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
    setPlayer(player + 1);
  }

  const onFormSubmit = (event) => {
    // prevent the browser from trying to submit the form.
    event.preventDefault();

    props.onSubmitLine(formFields);

    setFormFields({
      adj: '',
      noun: '', 
      adverb: '', 
      verb: '', 
      adj2: '',
      noun2: '',
    });
    
  };
const revealFormButton = ''
const revealForm = 
    <div className="PlayerSubmissionForm" onSubmit={onFormSubmit}
    >
      <h3>Player Submission Form for Player #{player}</h3>

      <form className="PlayerSubmissionForm__form" >
    
        <div className="PlayerSubmissionForm__poem-inputs">
      
          <input name='adj' placeholder='adjective 1' type='text' value={formFields.adj} onChange={onInputChange}/>
          <input name='noun' placeholder='noun 1' type='text' value={formFields.noun} onChange={onInputChange}/>
          <input name='adverb' placeholder='adverb' type='text' value={formFields.adverb} onChange={onInputChange}/>
          <input name='verb' placeholder='verb' type='text' value={formFields.verb} onChange={onInputChange}/>
          <input name='adj2' placeholder='adjective 2' type='text' value={formFields.adj2} onChange={onInputChange}/>
          <input name='noun2' placeholder='noun 2' type='text' value={formFields.noun2} onChange={onInputChange}/>

        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
        
      </form>
    </div>

  const content = props.showPlayerForm ? revealForm : revealFormButton;

  return (
  <div className="FinalPoem">
    { content }
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
