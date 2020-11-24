import React from 'react';
import PropTypes from 'prop-types';
import Quote from './Quote';
import GetQuoteButton from './GetQuoteButton';

const QuoteBox = ({ quote, author, newQuote }) => {
  return (
    <div id="quote-box">
      <Quote quote={quote} author={author} />
      <GetQuoteButton newQuote={newQuote} />
    </div>
  );
};

export default QuoteBox;
