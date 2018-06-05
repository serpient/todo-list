import React, { Component } from 'react';

class LockedTask extends React.Component {
  render() {
    var task = this.props.task;
    return (
      <div className="task-container">
        <img className="task-status-img" alt="locked-icon" src={require('../assets/Locked.svg')} />
        <div className="task-name locked-task">
          {task.task}
        </div>
      </div>
    );
  }
}