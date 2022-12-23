import './AnimalShow.css';
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';
import { useState } from 'react';

const svgMap = {
    // bird: bird,
    // cat: cat,
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
}

function AnimalShow({ type }) {
    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks(clicks + 1);
    }

    return (
        // Animal Card
        <div className='animal-show' onClick={handleClick}>

            {/* Animal image */}
            <img
                className='animal'
                alt='animal'
                src={svgMap[type]} />

            {/* Heart Icon */}
            <img
                className='heart'
                alt='heart'
                src={heart}
                style={{ width: 10 + 10 * clicks + 'px' }}
            />

        </div>
    )
}

export default AnimalShow;