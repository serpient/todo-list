import React from 'react';
import { toggleCompletion, getTasks } from '../redux/taskActions';
import { connect } from 'react-redux';
import './TaskGroup.css';

const completedIcon = require('../assets/Completed.svg');
const incompleteIcon = require('../assets/Incomplete.svg');

class UnlockedTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: {},
      img: require('../assets/Incomplete.svg'),
      classList: 'task-name'
    }
  }

  componentDidMount() {
    var task = this.props.data;
    var isCompleted = task.completedAt ? true : false;
    this.setState({ 
      task: this.props.data, 
      img: isCompleted ? completedIcon : incompleteIcon,
      classList: isCompleted ? 'task-name completed-text' : 'task-name'            
    });
  }
  toggleTask = (e) => {
    var task = this.state.task;
    // toggle completedAt status
    this.props.toggleCompletion(task.id);
    this.setState({ img: task.completedAt ? completedIcon : incompleteIcon})
    // set style to strike through text
    var elemClass = document.getElementById(task.id).classList;
    task.completedAt ? elemClass.add('completed-text') : elemClass.remove('completed-text');
  }
  render() {
    var task = this.state.task;
    return (
      <div className="tasks-container">
        <img className="task-status-img" alt="checkmark-icon" src={this.state.img} onClick={this.toggleTask}/>
        <div className={this.state.classList} id={task.id} onClick={this.toggleTask}>
          {task.task}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps, {getTasks, toggleCompletion})(UnlockedTask);