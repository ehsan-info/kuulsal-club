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
                    <h3>How Does React Work?</h3>
                    <p>While building the apps, team of facebook found that DOM is bit slow. So they found out one solution. To make it faster, React creates another DOM which is called as Virtual DOM. This is basically a DOM tree representation in javascript. When it times to read or write , it will use the virtual representation of it. This way react virtual DOM finds out the most efficient way to update the browser's DOM.</p>
                    <hr />
                    <h3>Props Vs State</h3>
                    <h5>Props:</h5>
                    <p>Props gives the way to make the compoment reusable by giving the ability to receive data from their parent compoment. Props are immutable.</p>
                    <hr />
                    <h5>State:</h5>
                    <p>State is local state of the component. This can not be modified and accessed outside of the compoment. State is mutable.</p>
                    <h3>Uses of useEffect in React.</h3>
                    <p>We can use useEffect to trigger an animation on the shopping cart page.We also can use this to validate an input while receiving characters. Validation takes place every time when the input changes.</p>
                </div>
            </div>
            <div className='body-right'>
                <User exerciseTime={exerciseTime}></User>
            </div>
        </div>
    );
};

export default Sports;