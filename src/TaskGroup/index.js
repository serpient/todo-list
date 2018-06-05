import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class TaskGroup extends React.Component {
  render() {
    var groupName = this.props.match.params.group;
    var taskGroup = this.props.taskGroup;
    // on load, check to see if dependencies are completed
    // if not, set image src to locked => render locked task container
    // otherwise, set to box per completedAt status => render unlocked task container
    return (
      <div className="task-group-container">
        <div className="header">{taskGroup.group}</div>
        <Link to="/" className="all-groups-btn">ALL GROUPS</Link>
      </div>
    );
  }
}

export default TaskGroup;