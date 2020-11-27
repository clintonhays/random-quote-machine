import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ quote, author, color }) => {
  return (
    <div className="text-author">
      <h2 id="text" style={{ color: color }}>
        {quote}
      </h2>
      <p id="author" style={{ color: color }}>
        {author}
      </p>
    </div>
  );
};

Quote.propTypes = {
  quote  : PropTypes.string,
  author : PropTypes.string,
  color  : PropTypes.string,
};

export default Quote;
