import React from 'react';
import './TaskGroup.css';

class LockedTask extends React.Component {
  render() {
    var task = this.props.data;
    return (
      <div className="tasks-container">
        <img className="task-status-img" alt="locked-icon" src={require('../assets/Locked.svg')} />
        <div className="task-name locked-task">
          {task.task}
        </div>
      </div>
    );
  }
}

export default LockedTask; 