function CheckHour() {
    const date = new Date();
    const hour = date.getHours();
    let timeOfDay;

    //create variable with styles
    const myStyle = {color: "#FF8C00", 
        backgroundColor: "#FF2D00",
        fontSize: "50px"
    };

    if(hour < 12) {
        timeOfDay= "morning";
        myStyle.color = " #04756F"
    }else if(hour < 17) {
        timeOfDay = "afternoon";
        myStyle.color = " #2E0927"
    }else {
        timeOfDay = "night";
        myStyle.color = " #D90000"
    }

    //return variable with styles
    return (
        <div>
            <h1 style={{color: "#FF8C00", 'background-color': "#FF2D00"}}>Good {timeOfDay}</h1>
            <h1 style={myStyle}>Good {timeOfDay}</h1>
        </div>
    );
}

export default CheckHour;