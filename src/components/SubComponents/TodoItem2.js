function TodoItem(task) {
    //make a template
    return (
        <div>
            <input onChange={() => console.log("Changed!")} type="checkbox" checked={task.ifCheck} id="myCheckbox"></input>
            <label className="myCheckbox" for="myCheckbox">{task.name}</label>
        </div>
    );
}

export default TodoItem