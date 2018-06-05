import React from 'react';
import { connect } from 'react-redux';
import { getTasks } from '../redux/taskActions';
import TaskGroupButton from './TaskGroupButton';
import { getTasksByGroup, getGroupNames } from '../utils/filterTaskFunctions';
import './AllTaskGroupBtns.css';

class AllTaskGroupBtns extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: this.props.tasks
    }
  }
  componentDidMount() {
    // save tasks from redux to state
    this.props.getTasks();
    this.setState({ tasks: this.props.tasks });
  }
  render() {
    var tasks = this.state.tasks;
    var arrayOfGroupNames = getGroupNames(tasks);
    console.log(arrayOfGroupNames);
    var bundleOfTaskGroups = arrayOfGroupNames.map((name, index) => {
      return ( 
        <TaskGroupButton taskGroup={getTasksByGroup(tasks, name)} key={index} groupName={name}/>
      );
    });
    return ( 
      <div className="all-task-group-container"> 
      <div className="header">Things To Do</div>
      {bundleOfTaskGroups} 
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps, {getTasks})(AllTaskGroupBtns);