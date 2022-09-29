import React from 'react';
import './Game.css';
const Game = (props) => {
    const { name, picture, about } = props.sport;
    return (
        <div className='games-list'>
            <img src={picture} alt="" />
            <div className='game-info'>
                <p className='game-name'>{name}</p>
                <p className='game-about'>{about}</p>
                <p>Time required: </p>
            </div>
            <button className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
            </button>
        </div>
    );
};

export default Game;