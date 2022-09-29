import logo from '../../images/Logo.png';
import React, { useEffect, useState } from 'react';
import Game from '../Game/Game';
import './Sports.css';
import User from '../User/User';
const Sports = () => {
    const [sports, setSports] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setSports(data))
    }, [])
    return (
        <div className="body-container">
            <div className='body-left'>
                <img src={logo} alt="" />
                <div>
                    <h3>Select Today's Game</h3>
                    <div className='game-container'>
                        {
                            sports.map(sport => <Game key={sport.id} sport={sport}></Game>)
                        }
                    </div>
                </div>
            </div>
            <div className='body-right'>
                <User></User>
            </div>
        </div>
    );
};

export default Sports;