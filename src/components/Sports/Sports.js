import React, { useEffect, useState } from 'react';
import Game from '../Game/Game';
import './Sports.css';
const Sports = () => {
    const [sports, setSports] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setSports(data))
    }, [])
    return (
        <div>
            <h3>Select Today's Game</h3>
            <div className='game-container'>
                {
                    sports.map(sport => <Game key={sport.id} sport={sport}></Game>)
                }
            </div>
        </div>
    );
};

export default Sports;