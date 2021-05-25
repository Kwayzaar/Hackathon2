import './App.css';
import React, { Component } from 'react'
import HabitsContainer from './containers/HabitsContainer'
import QuoteContainer from './containers/QuoteContainer'


class App extends Component {

  render() {
    return(
      <div>
        <header>
          <h1>Habit Tracker</h1>
        </header>
        <div>
          <QuoteContainer  />
          <HabitsContainer />
        </div>
      </div>
    ) 
  }
}

export default App;
