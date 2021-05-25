import './App.css';
import React, { Component } from 'react'
import HabitsContainer from './containers/HabitsContainer'
import QuoteContainer from './containers/QuoteContainer'


class App extends Component {

  render() {
    return (
      <div className='main'>
        <header className='header'>
          <h1>Habit Tracker</h1>
        </header>
        <div className='main-container'>
          <div className='quote-container'>
            <QuoteContainer />
          </div>
          <div className='habits-container'>
            <HabitsContainer />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
