import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      break: 5,
      session: 25,
    }
    this.incrementBreak = this.incrementBreak.bind(this);
    this.decrementBreak = this.decrementBreak.bind(this);
    this.incrementSession = this.incrementSession.bind(this);
    this.decrementSession = this.decrementSession.bind(this);
    this.start = this.start.bind(this);
  }
  incrementBreak() {
    let val = this.state.break
    val++
    this.setState({
      break: val
    })
  }
  decrementBreak() {
    let val = this.state.break
    if(val > 1){
      val--;
      this.setState({
        break: val
      })
    } 
  }
  incrementSession() {
    let val = this.state.session
    val++
    this.setState({
      session: val
    })
  }
  decrementSession() {
    let val = this.state.session
    val--
    this.setState({
      session: val
    })
  }
  start() {
    console.log("start timer");
    setTimeout(this.decrementSession, 1000)
  }
  render() {
    return (
      <div className="App">
        <p>Pomodoro</p>

        <div className="Lengths">
          <div className="Breaklength">
            <p>BREAK LENGTH</p>
              <div className="Time">
                <p onClick={() => this.decrementBreak()}>-</p>
                <p>{this.state.break}</p>
                <p onClick={() => this.incrementBreak()}>+</p>
              </div>
          </div>

          <div className="Sessionlength">
            <p>SESSION LENGTH</p>
              <div className="Time">
                <p onClick={() => this.decrementSession()}>-</p>
                <p>{this.state.session}</p>
                <p onClick={() => this.incrementSession()}>+</p>
              </div>
          </div>
        </div>

        <div className="Session" onClick={() => this.start()}>
          <p>SESSION</p>
          <p>{this.state.session}</p>
        </div>
      </div>
    );
  }
}

export default App;
