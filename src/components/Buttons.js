import React from 'react';

const Buttons = ({ newQuote }) => {
  return (
    <div className="buttonDiv">
      <button className="button twitter">Twitter!</button>
      <button className="button fbook">Fbook</button>
      <button className="button" onClick={() => newQuote()}>
        New Quote
      </button>
    </div>
  );
};

export default Buttons;
