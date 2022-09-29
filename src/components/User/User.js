import React from 'react';
import userImg from '../../images/james.jpg';
import { displayData, loadData } from '../../utilities/loadData';
import './User.css'
const User = (props) => {
    const { exerciseTime } = props;
    let totalGameTime = 0;
    for (const gameTime of exerciseTime) {
        totalGameTime += gameTime.time;
    }
    const getBreakTime = breakTime => {
        loadData(breakTime);
    }
    /* const getData = displayData();
    console.log(getData); */
    const savedTime = displayData();
    console.log(savedTime);
    return (
        <div className='user-data-track'>
            <div className='user-details'>
                <div className='user-img'>
                    <img src={userImg} alt="" />
                </div>
                <div className='user-name'>
                    <h3>James Cameroon</h3>
                    <p>Sydney,Australia</p>
                </div>
            </div>
            <div className='user-health'>
                <div>
                    <h1>75<small>kg</small></h1>
                    <p>Weight</p>
                </div>
                <div>
                    <h1>5.7</h1>
                    <p>Height</p>
                </div>
                <div>
                    <h1>28<small>yrs</small></h1>
                    <p>Age</p>
                </div>
            </div>
            <div className='break-time-container'>
                <p>Break Time</p>
                <div className='break-time'>
                    <p onClick={() => getBreakTime(10)}>10s</p>
                    <p onClick={() => getBreakTime(20)}>20s</p>
                    <p onClick={() => getBreakTime(30)}>30s</p>
                    <p onClick={() => getBreakTime(40)}>40s</p>
                    <p onClick={() => getBreakTime(50)}>50s</p>
                </div>
            </div>
            <div className='game-details-time'>
                <p>Total Game Details</p>
                <div className='game-detail'>
                    <p>Game Time</p>
                    <p>{totalGameTime}seconds</p>
                </div>
                <div className='game-break'>
                    <p>Break Time</p>
                    <p>{savedTime}seconds</p>
                </div>
            </div>
            <button className='btn-activity'>
                <p className='activity-text'>Activity Completed</p>
            </button>
        </div>
    );
};

export default User;