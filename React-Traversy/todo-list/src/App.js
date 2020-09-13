import React, {Component} from 'react';
import Todos from './components/Todos'



class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Watch a movie",
        completed: false
      },
      {
        id: 2,
        title: "Hang with Wife",
        completed: false
      },
      {
        id: 3,
        title: "Play with Kala",
        completed: false
      }
    ]
  }
  render() {
      return (
        console.log(this.state.todos)
        <div className="App">
        <Todos/>
      </div>
      );
  }
}
export default App;
