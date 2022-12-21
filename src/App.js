import Animal from './Animal';
import { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <button onClick={handleClick}>Add Animal</button>
            <div>
                Number of animals: {count}
            </div>

            {/* <Animal alt='image of a cow' type='cow' />
            <Animal alt='image of a bird' type='bird' />
            <Animal alt='image of a horse' type='horse' /> */}
        </div>
    )
}

// Exporting the App component
export default App;