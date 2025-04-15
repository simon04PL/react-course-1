import react, {Component} from "react";

class App extends Component {
    constructor() {
        super();
        this.state = {
            name: "Simon",
            age: 21
        };
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h2>{this.state.age}</h2>
            </div>
        );
    }
}

export default App;