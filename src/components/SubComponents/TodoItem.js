function TodoItem() {
    //make a template
    return (
        <div>
            <input type="checkbox" id="myCheckbox"></input>
            <label className="myCheckbox" for="myCheckbox">Chceck me</label>
        </div>
    );
}

export default TodoItem