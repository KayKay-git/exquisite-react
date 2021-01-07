import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {

  const [formFields, setFormFields] = useState({
    adj1: '',
    noun1: '',
    adv: '',
    verb: '',
    adj2: '',
    noun2: '',
  });

  const [player, setPlayer] = useState(props.index);

  const onInputChange = (event) => {

    const newFormFields = {...formFields}

    newFormFields[event.target.name] = event.target.value;

    setFormFields(newFormFields);
  }

  const sentenceFormat = () => {
    const fields = props.fields.map((field) => {
      if (field.key) {
        return formFields[`${field.key}`]
      } else {
        return field
      }
    })
    return fields.join(' ')
  }

  const onFormSubmit = (event) => {
    // prevent the browser from trying to submit the form.
    event.preventDefault();
    props.sendSubmission(sentenceFormat());   // callback fn
    setFormFields({
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: '',
    });  // reset after submit 

    setPlayer(player + 1);

  }

const revealFormButton = ''
const revealForm = 
    <div className="PlayerSubmissionForm" onSubmit={onFormSubmit}
    >
      <h3>Player Submission Form for Player #{player}</h3>

      <form className="PlayerSubmissionForm__form" >
    
        <div className="PlayerSubmissionForm__poem-inputs">
          
          {props.fields.map((field) => {
            if (field.key) {
              return (
                <input 
                  key={field.key}
                  name={field.key}
                  placeholder={field.placeholder}
                  type="text" 
                  value={formFields[field.key] || ''}
                  onChange={onInputChange} 
                  className={ formFields[field.key] === '' ? 'PlayerSubmissionFormt__input--invalid'  : 'PlayerSubmissionForm__input--invalid::placeholder'}
                />
              )
          } else {
            return field;
          };
        })}

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
