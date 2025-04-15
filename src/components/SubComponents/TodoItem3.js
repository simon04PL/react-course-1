function TodoItem(task) {
    return (
        <div>
            <input
                type="checkbox"
                checked={task.item.complited}
                onChange={() => task.handleChange(task.item.id)}
                id={`checkbox-${task.item.id}`}
            />
            <label className="myCheckbox" htmlFor={`checkbox-${task.item.id}`}>
                {task.item.text}
            </label>
        </div>
    );
}

export default TodoItem;