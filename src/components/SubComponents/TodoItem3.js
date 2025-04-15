function TodoItem({ id, name, ifCheck, handeChange }) {
    return (
        <div>
            <input 
                onChange={() => handeChange(id)} 
                type="checkbox" 
                checked={ifCheck} 
                id={`checkbox-${id}`} 
            />
            <label className="myCheckbox" htmlFor={`checkbox-${id}`}>{name}</label>
        </div>
    );
}

export default TodoItem;