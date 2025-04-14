import React from "react";

class App extends React.Component {
    //define state in constructor. State is responsible for storing data in class based components
    constructor() {
        //obligatory call to super() in constructor
        super();
        //initialize state
        this.state = {
            answer: "no"
        };
    }
    //render method is responsible for rendering the component
    render() {
        return (
            <div>
                <h1>Do you know president of US? {this.state.answer}</h1>
            </div>
        );
    }
}

export default App;