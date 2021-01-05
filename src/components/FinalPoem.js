import React from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

const FinalPoem = (props) => {
  const completePoem = props.currentFields.map((field, i) => {
    const { adj, noun, adverb, verb, adj2, noun2 } = field

    const line = `The ${adj} ${noun} ${adverb} ${verb} the ${adj2} ${noun2}.` 
      return <p key={i}> {line}</p>;
    }

  );

  const onSubmitLineButtonClick = () => {
    props.revealPoem();
  }

  const revealedPoem =
  <section className="FinalPoem__poem">
    <h3>Final Poem</h3>
    { completePoem }
  </section>;

  const revealPoemButton =
  <div className="FinalPoem__reveal-btn-container">
      <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={onSubmitLineButtonClick } />
  </div>
const content = props.poemSubmitted ? revealedPoem : revealPoemButton;

return (
  <div className="FinalPoem">
    { content }
  </div>
  );
}


FinalPoem.propTypes = {
  isSubmitted: PropTypes.bool.isRequired,
  submissions: PropTypes.arrayOf(PropTypes.string).isRequired,
  revealPoem: PropTypes.func.isRequired,
};

export default FinalPoem;
