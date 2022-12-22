import Animal from './Animal';
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

    return (
        <div>
            <button onClick={handleClick}>Add Animal</button>
            <div>{animals}</div>

        </div>
    )
}

export default App;