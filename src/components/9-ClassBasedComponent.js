//Do not forget about import react
import React from "react"

/*
function ClassBasedComponents () {
    return (
        <div>
            <h1>H1 tag</h1>
        </div>
    );
}
*/

//not use functional component but class based component
class ClassBasedComponents extends React.Component {
    myMethod () {

    }
    //render component based on the data from the method
    render() {
        const date = new Date();
        const style = this.myMethod();
        return (
            <div>
                <h1>H1 tag</h1>
            </div>
        );
    }
}

export default ClassBasedComponents;
