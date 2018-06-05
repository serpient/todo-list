import React, { Component } from 'react';


class UnlockedTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: require('../assets/Incomplete.svg')
    }
  }
  toggleTask = (e) => {
    const { text } = e.currentTarget.text;
    // set completedAt status to true
    // set style to strike through text
    // image src link is change to complete
  }
  render() {
    var task = this.props.task;
    return (
      <div className="task-container">
        <img className="task-status-img" alt="checkmark-icon" src={this.state.img} />
        <div className="task-name" onClick={e => this.toggleTask(e)}>
          {task.task}
        </div>
      </div>
    );
  }
}