import Footer from './SubComponents/Footer';

//create component in component (<Footer />)
function App2 () {
    return (
        <div className="add-css">
            <h1>Hello a third time</h1>
            <ul>
                <li>Thing 1</li>
                <li>Thing 2</li>
                <li>Thing 3</li>
            </ul>
            <main>
                <p>This is my textContent</p>
            </main>
            <Footer />
        </div>
    );
}

export default App2;