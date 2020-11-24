import React from 'react';

const GetQuoteButton = ({ newQuote }) => {
  return (
    <div className="buttonDiv">
      <button id="button" onClick={() => newQuote()}>
        New Quote
      </button>
    </div>
  );
};

export default GetQuoteButton;
