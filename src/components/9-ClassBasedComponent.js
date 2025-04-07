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

class ClassBasedComponents extends React.Component {
    myMethod () {

    }

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
