import react from 'react';

class ChangingState extends react.Component {
    //
    constructor() {
        super();
        this.state = {
            count: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }
    //methods to counting clicks
    handleClick () {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    //add script with change state
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Change</button>
            </div>
        );
    }
}

export default ChangingState;