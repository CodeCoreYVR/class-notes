import React, {Component} from 'react';

class TaskList extends Component {
  constructor (props) {
    super(props);

    this.state = {
      task1: false,
      task2: false
    }
  }
  render () {
    const {
      task1, task2
    } = this.state;

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column"
        }}
        className="TaskList"
      >
        <h2>Task List</h2>
        <label>
          <input
            type="checkbox"
            name="Task 1"
            checked={task1}
            onClick={() => this.setState({task1: !task1})}
          />
          <span
            style={{textDecoration: task1 ? "line-through" : "none"}}
          >Task 1</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="Task 2"
            checked={task2}
            onClick={() => this.setState({task2: !task2})}
          />
          <span
            style={{textDecoration: task2 ? "line-through" : "none"}}
          >Task 2</span>
        </label>
      </div>
    )
  }
}

export default TaskList;
