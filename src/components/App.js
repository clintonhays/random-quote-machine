import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import QuoteBox from './QuoteBox';

class App extends Component {
  state = {
    error    : null,
    isLoaded : false,
    quote    : {},
  };

  componentDidMount () {
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
  }

  render () {
    const { error, isLoaded, quote } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return <QuoteBox quote={quote.quoteText} author={quote.quoteAuthor} />;
    }
  }
}

export default App;
