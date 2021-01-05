import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = () => {

  const [currentFields, setFields] = useState([])
  const [poemSubmitted, setPoemSubmitted] = useState(false)
  const [showRecent, setShowRecent] = useState(true)
  const [showPlayerForm, setShowPlayerForm] = useState(true);


  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(' ');

   // pass to PlayerSub form, when player submits line this is the callback function that will be called 
  const onSubmitLine = (fields) => {
    const newFieldList = [...currentFields];
    newFieldList.push(fields);
    setFields(newFieldList);

    const recentField = []
    recentField.push(fields);

    setShowRecent(recentField);
  }

  const revealPoem = () => {
    if (currentFields.length >= 1) {
      setPoemSubmitted(true);
      setShowRecent(false);
      setShowPlayerForm(false);
    }
  }

  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>
      <RecentSubmission recentSubmission = {currentFields} showRecent={showRecent} />

      <PlayerSubmissionForm onSubmitLine= {onSubmitLine} showPlayerForm = {showPlayerForm}/>

      <FinalPoem  currentFields={currentFields} poemSubmitted={poemSubmitted} revealPoem={revealPoem} />

    </div>
  );
}

const FIELDS = [
  'The',
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  'the',
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  '.',
];

export default Game;
