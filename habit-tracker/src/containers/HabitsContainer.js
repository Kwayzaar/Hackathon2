import React, { Component } from 'react'; 
import HabitCard from '../components/HabitCard'

const baseURL = 'http://localhost:3000/habits'

class HabitsContainer extends Component {

state = {
  habits: []
}

habitClicked = (habit) => {
  console.log(this.state.habits[habit.id-1].do_count)
  // this.setState({ habits[habit.id-1].do_count: this.state.habits[habit.id-1].do_count+1 })
}

componentDidMount() {
  fetch(baseURL)
  .then(response => response.json())
  .then(data => this.setState({ habits: data}))
}


habitCollection = () => {
  return this.state.habits.map(habit => {
    return (
      <HabitCard 
        id={habit.id}
        name={habit.name}
        isGood={habit.is_good}
        doCount={habit.do_count}
        habitClicked={this.habitClicked}
      />
    )
  })
}

render() {
  return (
    <div className="App">
      { this.habitCollection() }
    </div>
    );
  }
  
}

export default HabitsContainer;
