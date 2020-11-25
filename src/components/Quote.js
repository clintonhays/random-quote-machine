import React from 'react';

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

export default Quote;
