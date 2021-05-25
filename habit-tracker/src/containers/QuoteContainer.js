import React, { Component } from 'react'

const cors_api_host = 'https://cors-anywhere.herokuapp.com/' 
const quoteURL = 'https://inspiration.goprogram.co.uk/'


export default class QuoteContainer extends Component {

  state = {
    quote: []
  }

  componentDidMount() {
    fetch(cors_api_host + quoteURL)
    .then(response => response.json())
    .then(quote => this.setState({ quote }))
  }

  render() {
    return (
      <div>
        { this.state.quote.quote }
      </div>
    )
  }
}
