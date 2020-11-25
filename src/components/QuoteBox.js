import React from 'react';
// import PropTypes from 'prop-types';
import Quote from './Quote';
import Buttons from './Buttons';

const QuoteBox = ({ quote, author, newQuote, color }) => {
  return (
    <div id="quote-box">
      <Quote quote={quote} author={author} color={color} />
      <Buttons newQuote={newQuote} color={color} />
    </div>
  );
};

export default QuoteBox;
