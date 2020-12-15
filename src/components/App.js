import React, { Component } from 'react';
import QuoteBox from './QuoteBox';

class App extends Component {
  state = {
    error    : null,
    isLoaded : false,
    quote    : {},
    color    : 'blue',
  };

  getColor = () => {
    const colors = [
      '#54478C',
      '#2C699A',
      '#048BA8',
      '#0DB39E',
      '#16DB93',
      '#83E377',
      '#B9E769',
      '#F1C453',
      '#F29E4C',
    ];

    const randColor = colors[Math.floor(Math.random() * colors.length)];

    return randColor;
  };

  getQuote = () => {
    fetch('https://quote-garden.herokuapp.com/api/v3/quotes/random')
      // prettier ignore
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded : true,
            quote    : result.data[0],
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

  newQuote = () => {
    const color = this.getColor();

    document.body.style.backgroundColor = color;
    this.setState({
      color : color,
    });
    this.getQuote();
  };

  componentDidMount () {
    this.getQuote();
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
      return (
        <QuoteBox
          quote={quote.quoteText}
          author={quote.quoteAuthor}
          newQuote={this.newQuote}
          color={this.state.color}
        />
      );
    }
  }
}

export default App;
