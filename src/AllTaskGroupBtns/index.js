import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect, Dispatch } from 'react-redux';
import { getTasks, getTasksByGroup, getGroupNames } from '../redux/taskActions';
import TaskGroupButton from './TaskGroupButton';

class AllTaskGroupBtns extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: '',
      groups: []
    }
  }
  componentDidMount() {
    this.props.getGroupNames();
    this.setState({ groups: this.props.tasks });
  }
  render() {
    var arrayOfGroupNames = this.state.groups;
    console.log(arrayOfGroupNames);
    var bundleOfTaskGroups = arrayOfGroupNames.map((name, index) => {
      this.props.getTasksByGroup(name, () => {
        this.setState({ tasks: this.props.tasks })
      });
      console.log('tasks=' + this.state.tasks);

      return ( 
        <TaskGroupButton taskGroup={this.props.tasks} key={index} groupName={name}/>
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getTasksByGroup: dispatch(getTasksByGroup()),
//     getGroupNames: dispatch(getGroupNames())
//   }
// }
export default connect(mapStateToProps, {getTasksByGroup, getGroupNames})(AllTaskGroupBtns);