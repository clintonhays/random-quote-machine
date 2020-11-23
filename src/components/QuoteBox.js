import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Quote from './Quote';

class QuoteBox extends Component {
  render () {
    const { quote, author } = this.props;
    return (
      <div id="quote-box">
        <Quote quote={quote} author={author} />
      </div>
    );
  }
}

export default QuoteBox;
