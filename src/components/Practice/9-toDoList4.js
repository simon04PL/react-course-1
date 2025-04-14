import TodoItem from './../SubComponents/TodoItem';
import TodoData from './../Data/todoData';
import React from 'react';

class toDoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todoData: TodoData
        };
    }
    render() {
        const todoTasks = this.state.todoData.map( tasks => <TodoItem key={tasks.id} name={tasks.text} ifCheck={tasks.complited} />);
        return (
            <div>
                {todoTasks}
            </div>
        );
    }
}

export default toDoList;