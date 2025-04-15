import TodoItem from './../SubComponents/TodoItem3';
import TodoData from './../Data/todoData';
import React from 'react';

class toDoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todoDatas: TodoData
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodoData = prevState.todoDatas.map(task => {
                if (task.id === id) {
                    return { ...task, complited: !task.complited };
                }
                return task;
            });
            return {
                todoDatas: updatedTodoData
            };
        });
    }

    render() {
        const todoTasks = this.state.todoDatas.map(tasks => (
            <TodoItem key={tasks.id} item={tasks} handleChange={this.handleChange} />
        ));
        return (
            <div>
                {todoTasks}
            </div>
        );
    }
}

export default toDoList;