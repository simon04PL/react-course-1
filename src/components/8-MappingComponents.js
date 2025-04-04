import Joke from './SubComponents/Joke';
import jokeData from './Data/jokesData';

function MappingComponents () {
    //downloat data from jokesData and send to Joke module
    const jokeComponents = jokeData.map(joke => <Joke key={joke.id} question={joke.question} answers={joke.answer} />);

    //render joke module
    return (
        <div>
            {jokeComponents}
        </div>
    )
}

export default MappingComponents;