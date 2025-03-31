function Joke(props) {
    return (
        <div>
            <p style={{color: "green"}}>{props.question}</p>
            <p>{props.answers}</p>
        </div>
    );
}

export default Joke;