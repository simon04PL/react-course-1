import TodoItem from './../SubComponents/TodoItem3';
import TodoData from './../Data/todoData';
import React from 'react';

class toDoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todoData: TodoData
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodoData = prevState.todoData.map(task => {
                if (task.id === id && task.complited === false) {
                    task.complited = task.complited;
                } else if (task.id === id && task.complited === true) {
                    task.complited = !task.complited;
                }
                return task;
            });
            return {
                todoData: updatedTodoData
            };
        });
    }

    render() {
        const todoTasks = this.state.todoData.map( tasks => <TodoItem key={tasks.id} name={tasks.text} ifCheck={tasks.complited} handeChange={this.handleChange} />);
        return (
            <div>
                {todoTasks}
            </div>
        );
    }
}

export default toDoList;