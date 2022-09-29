import React from 'react';
import './Game.css';
const Game = (props) => {
    const { name, picture, about, time } = props.sport;
    return (
        <div className='games-list'>
            <img src={picture} alt="" />
            <div className='game-info'>
                <p className='game-name'>{name}</p>
                <p className='game-about'>{about}</p>
                <p className='game-time'>Time required: {time}s</p>
            </div>
            <button className='btn-cart'>
                <p className='btn-text'>Add to list</p>
            </button>
        </div>
    );
};

export default Game;