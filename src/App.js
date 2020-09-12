import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = { meaningful: 47};
  };

  update = () => {
    const { meaningful } = this.state;
    this.setState( (prevstate,prevprops) =>{ return   { meaningful: prevstate.meaningful + prevprops.increment }},()=>
    console.log(this.state.meaningful))
    console.log("same ", meaningful)
  }


  render() {
    return (
      <div>
        <h1>Asynchronous State Example</h1>
        <div>{this.state.meaningful}</div>
        <button onClick={this.update}>Update</button>
      </div>
    );
  }
}
export default App;
