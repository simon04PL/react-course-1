import TodoItem from './../SubComponents/TodoItem';
import TodoData from './../Data/todoData';

function toDoList () {
    const todoTasks = TodoData.map( tasks => <TodoItem key={tasks.id} name={tasks.text} ifCheck={tasks.complited} />);
    return (
        <div>
            {todoTasks}
        </div>
    );
}

export default toDoList;