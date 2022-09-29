import logo from '../../images/Logo.png';
import React, { useEffect, useState } from 'react';
import Game from '../Game/Game';
import './Sports.css';
import User from '../User/User';
import { displayData } from '../../utilities/loadData';
const Sports = () => {
    const [sports, setSports] = useState([]);
    const [exerciseTime, setExerciseTime] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setSports(data))
    }, []);
    useEffect(() => {
        const storedTime = displayData();
        let saveTime;
        for (const storeTime in storedTime) {
            saveTime = storeTime;
            console.log(saveTime);
        }

    }, [sports]);
    const handleExerciseTime = (selectedGame) => {
        const newExerciseTime = [...exerciseTime, selectedGame];
        setExerciseTime(newExerciseTime);
    }
    return (
        <div className="body-container">
            <div className='body-left'>
                <img src={logo} alt="" />
                <div>
                    <h3>Select Today's Game</h3>
                    <div className='game-container'>
                        {
                            sports.map(sport => <Game key={sport.id} sport={sport} handleExerciseTime={handleExerciseTime}></Game>)
                        }
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div className='body-right'>
                <User exerciseTime={exerciseTime}></User>
            </div>
        </div>
    );
};

export default Sports;