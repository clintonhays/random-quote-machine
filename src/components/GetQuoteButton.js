import React from 'react';

const GetQuoteButton = ({ newQuote }) => {
  return (
    <div className="button">
      <button onClick={() => newQuote()}>New Quote</button>
    </div>
  );
};

export default GetQuoteButton;
