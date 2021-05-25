import './App.css';
import React, { Component } from 'react'
import HabitsContainer from './containers/HabitsContainer'
import QuoteContainer from './containers/QuoteContainer'


class App extends Component {

  render() {
    return(
      <div>
        <QuoteContainer  />
        <HabitsContainer />
      </div>
    ) 
  }
}

export default App;
