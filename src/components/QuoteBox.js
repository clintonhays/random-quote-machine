import React from 'react';
// import PropTypes from 'prop-types';
import Quote from './Quote';
import Buttons from './Buttons';

const QuoteBox = ({ quote, author, newQuote }) => {
  return (
    <div id="quote-box">
      <Quote quote={quote} author={author} />
      <Buttons newQuote={newQuote} />
    </div>
  );
};

export default QuoteBox;
