import React from 'react';
import './Game.css';
const Game = (props) => {
    const { handleExerciseTime, sport } = props;
    const { name, picture, about, time } = sport;
    console.log(props)
    return (
        <div className='games-list'>
            <img src={picture} alt="" />
            <div className='game-info'>
                <p className='game-name'>{name}</p>
                <p className='game-about'>{about}</p>
                <p className='game-time'>Time required: {time}s</p>
            </div>
            <button onClick={() => handleExerciseTime(sport)} className='btn-cart'>
                <p className='btn-text'>Add to list</p>
            </button>
        </div>
    );
};

export default Game;