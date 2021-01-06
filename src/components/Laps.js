import React, { Component } from "react";

export class Laps extends Component {
  compare(a, b) {
    return a - b;
  }

  render() {
    return (
      <div className="laps">
        {this.props.laps.sort(this.compare).map((lap, i) => (
          <div className="lap" key={i}>
            {this.props.formatTime(lap)}
          </div>
        ))}
      </div>
    );
  }
}

export default Laps;
