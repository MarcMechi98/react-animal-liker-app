import AnimalShow from './AnimalShow';
import { useState } from 'react';

const getRandomAnimal = () => {
    const animals = ['bird', 'cat', 'cow', 'gator', 'horse'];
    return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
        // setAnimals(animals.push(getRandomAnimal()));
        // Nao posso usar push pq MODIFICA UM PIECE OF STATE
        setAnimals([...animals, getRandomAnimal()]);
    }

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />
    });

    return (
        <div>
            <button onClick={handleClick}>Add Animal</button>
            <div>{renderedAnimals}</div>

        </div>
    )
}

export default App;