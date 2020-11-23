import React from 'react';

const Quote = ({ quote, author }) => {
  return (
    <div className="text-author">
      <h2 id="text">{quote}</h2>
      <p id="author">{author}</p>
    </div>
  );
};

export default Quote;
