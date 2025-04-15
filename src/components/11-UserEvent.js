//function which is made after click btn
function handleClick() {
    console.log('Button clicked!');
}

//reaction for user events
function App() {
    return (
        <div>
            <img onMouseOver={() => console.log("Hovered!")} src="https://website-tree-main-asset.s3.us-west-1.amazonaws.com/ad-beauty-booking-2-en.jpeg" />
            <br />
            <br />
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default App;