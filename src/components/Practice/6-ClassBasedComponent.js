import React from 'react';

class App extends React.Component {
    render() {
        return ( 
            <div>
                <Header username="Simon" />
                <Greeting />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <header>
                <h1>Welcome {this.props.username}!</h1>
            </header>
        );
    }
}

class Greeting extends React.Component {
    render() {
        const date = new Date();
        const hours = date.getHours();
        let timeOfDay;
        if (hours < 12) {
            timeOfDay = "morning";
        } else if (hours >= 12 && hours < 20) {
            timeOfDay = "afternoon";
        } else {
            timeOfDay = "night";
        }
        return (
            <div>
                <h2>Good {timeOfDay}!</h2>
            </div>
        );
    }
}

export default App;