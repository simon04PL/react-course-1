
function Variables () {
    //define variables
    const firstName = "Simon"
    const lastName = "Mastalerz"
    const date = new Date()
    //return variables with 2 options
    return (
        <div>
            <h1>Hello {firstName + " " + lastName} </h1>
            <h1>Hello {`${firstName} ${lastName}`}</h1>
            <h2>It's {date.getHours()}</h2>
        </div>
    );
}

export default Variables;