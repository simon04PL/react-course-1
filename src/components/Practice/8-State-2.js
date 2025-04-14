import react from "react";

class App extends react.Component {
    constructor() {
        super();
        this.state = {
            isLogge: false
        };
    }

    render() {
        return (
            <div>
                <h2>{this.state.isLoggedIn ? "You are logged in" : "You are logged out"}</h2>
            </div>
        );
    }
}

export default App;