import React from 'react';
import PropTypes from 'prop-types';
import Quote from './Quote';

const QuoteBox = ({ quote, author }) => {
  return (
    <div id="quote-box">
      <Quote quote={quote} author={author} />
    </div>
  );
};

export default QuoteBox;
