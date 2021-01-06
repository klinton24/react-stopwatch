import React, { Component } from "react";
import "./styles.scss";
import Time from "./components/Time";
import Action from "./components/Actions";
import Laps from "./components/Laps";

class App extends Component {
  constructor() {
    super();

    this.state = {
      time: 0,
      formattedTime: "00:00:00",
      timerState: "stopped",
      laps: [0],
      lap: 0
    };
    this.startTimer = this.startTimer.bind(this);
    this.lapTime = this.lapTime.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  startTimer() {
    this.timer = setInterval(() => {
      this.setState({
        time: this.state.time + 1,
        formattedTime: this.formatTime(this.state.time + 1),
        timerState: "running"
      });
    }, 1000);
    console.log("starting");
  }

  lapTime() {
    let laps = this.state.laps;
    laps.push(this.state.time);
    this.setState({
      lap: this.state.time,
      laps: laps
    });
    console.log("lap button pushed");
  }

  pauseTimer() {
    clearInterval(this.timer);
    this.setState({
      timerState: "paused"
    });
    console.log("pausing");
  }

  stopTimer() {
    clearInterval(this.timer);
    this.setState({
      time: 0,
      formattedTime: "00:00:00",
      timerState: "stopped",
      laps: [0]
    });
    console.log("stopping");
  }

  formatTime(secs) {
    let date = new Date(null);
    date.setSeconds(secs);
    let formattedTime = date.toISOString().substr(11, 8);

    return formattedTime;
  }

  render() {
    return (
      <div className="App">
        <header className="appHeader">
          <h3>
            Stopwatch<span>App</span>
          </h3>
        </header>
        <div className="timeContainer">
          <Time time={this.state.formattedTime} />
        </div>
        <div className="actionContainer">
          <Action
            startTimer={this.startTimer}
            timerState={this.state.timerState}
            lapTime={this.lapTime}
            pauseTimer={this.pauseTimer}
            stopTimer={this.stopTimer}
          />
          <div className="lapsContainer">
            <Laps laps={this.state.laps} formatTime={this.formatTime} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
