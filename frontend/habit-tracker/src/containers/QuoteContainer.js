import React, { Component } from 'react'

const quoteURL = 'https://inspiration.goprogram.co.uk/'

export default class QuoteContainer extends Component {

  state = {
    quote: []
  }

  componentDidMount() {
    fetch(quoteURL)
    .then(response => response.json())
    .then(console.log)
  }

  render() {
    return (
      <div>
        {/* { this.state.quote } */}
      </div>
    )
  }
}
