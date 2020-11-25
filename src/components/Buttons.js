import React from 'react';

const Buttons = ({ newQuote }) => {
  return (
    <div className="buttonDiv">
      <a className="button twitter" href="twitter.com/intent/tweet">
        Twitter!
      </a>
      <a
        className="button fbook"
        href="http://www.facebook.com/sharer.php?u=https://crhdev.com"
        target="_blank"
        rel="noreferrer"
      >
        Fbook
      </a>
      <button className="button" onClick={() => newQuote()}>
        New Quote
      </button>
    </div>
  );
};

export default Buttons;
