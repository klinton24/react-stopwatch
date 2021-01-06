import React, { Component } from "react";

export class Actions extends Component {
  render() {
    let start =
      this.props.timerState !== "running" ? (
        <button className="startbtn" onClick={this.props.startTimer}>
          Start
        </button>
      ) : (
        <button className="startbtn" disabled>
          Start
        </button>
      );

    let lapTime =
      this.props.timerState === "running" ? (
        <button className="lapbtn" onClick={this.props.lapTime}>
          Lap
        </button>
      ) : (
        <button className="lapbtn" disabled>
          Lap
        </button>
      );

    let pause =
      this.props.timerState === "running" ? (
        <button className="pausebtn" onClick={this.props.pauseTimer}>
          Pause
        </button>
      ) : (
        <button className="pausebtn" disabled>
          Pause
        </button>
      );

    let stopTimer =
      this.props.timerState !== "stopped" ? (
        <button className="stopbtn" onClick={this.props.stopTimer}>
          Stop
        </button>
      ) : (
        <button className="stopbtn" disabled>
          Stop
        </button>
      );

    return (
      <div>
        {start}
        {lapTime}
        {pause}
        {stopTimer}
      </div>
    );
  }
}

export default Actions;
