function Joke(props) {
    //get and stylise text dawloaded from props parameter
    return (
        <div>
            <p style={{color: "green"}}>{props.question}</p>
            <p>{props.answers}</p>
        </div>
    );
}

export default Joke;