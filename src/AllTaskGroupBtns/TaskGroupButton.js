import React from 'react';
import { Link } from 'react-router-dom'
import './AllTaskGroupBtns.css';

class TaskGroupButton extends React.Component {
  render() {
    var taskGroup = this.props.taskGroup;
    var completedTasks = taskGroup.filter((task) => {
      return task.completedAt === true;
    });
    return ( 
      <Link to={"/" + this.props.groupName} className="task-group-btn">
        <aside className="task-triangle-icon">&#9658;</aside>
        <div className="task-group-text">
          <div className="task-group-title"> 
            {this.props.groupName} 
          </div> 
          <div className="task-group-tasks-count"> 
            {completedTasks.length} OF {taskGroup.length} TASKS COMPLETE
          </div> 
        </div>
      </Link>
    );
  }
}

export default TaskGroupButton;