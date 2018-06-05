import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { getTasks } from '../redux/taskActions';
import { getTasksByGroup, dependenciesAreCompleted } from '../utils/filterTaskFunctions';
import LockedTask from './LockedTask';
import UnlockedTask from './UnlockedTask';
import './TaskGroup.css';

class TaskGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allTasks: [],
      tasks: [],
      groupName: this.props.match.params.group
    }
  }
  componentDidMount() {
    this.props.getTasks();
    this.setState({ allTasks: this.props.tasks });
    var filteredTasks = getTasksByGroup(this.props.tasks, this.state.groupName);
    this.setState({ tasks: filteredTasks });
  }
  render() {
    var allTasks = this.state.allTasks;
    console.log('allTasks=' + allTasks);
    var tasks = this.state.tasks;
    var listOfTasks = tasks.map((task, index) => {
      if (dependenciesAreCompleted(allTasks, task.dependencyIds)) {
        return <UnlockedTask key={index} data={task}/>
      } else {
        return <LockedTask key={index} data={task} />
      }
    })
    return (
      <div className="task-group-container">
        <div className="header">{this.state.groupName}</div>
        <Link to="/" className="all-groups-btn">ALL GROUPS</Link>
        {listOfTasks}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps, {getTasks})(TaskGroup);