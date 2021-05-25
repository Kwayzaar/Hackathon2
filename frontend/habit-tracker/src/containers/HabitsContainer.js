import React, { Component } from 'react'; 
import HabitCard from '../components/HabitCard'

const baseURL = 'https://rickandmortyapi.com/api/character'

class HabitsContainer extends Component {

    state = {
      habits: []
    }
  
    componentDidMount() {
      fetch(baseURL)
      .then(response => response.json())
      .then(data => this.setState({ habits: data}))
    }
  
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <h1>Habit Tracker</h1>
          </header>
          <HabitCard habits={ this.state.habits } />
        </div>
        );
      }
    }  
export default HabitsContainer;