import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import QuoteBox from './QuoteBox';

class App extends Component {
  state = {
    error    : null,
    isLoaded : false,
    quote    : {},
  };

  getNewQuote = () => {
    fetch('https://quote-garden.herokuapp.com/api/v2/quotes/random')
      // prettier ignore
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded : true,
            quote    : result.quote,
          });
        },
        (error) => {
          this.setState({
            isLoaded : true,
            error,
          });
        }
      );
  };

  componentDidMount () {
    this.getNewQuote();
  }

  render () {
    const { error, isLoaded, quote } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div className="loading">
          <h2>Loading...</h2>
        </div>
      );
    } else {
      return <QuoteBox quote={quote.quoteText} author={quote.quoteAuthor} newQuote={this.getNewQuote} />;
    }
  }
}

export default App;
