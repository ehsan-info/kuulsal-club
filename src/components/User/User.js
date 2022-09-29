import React from 'react';
import userImg from '../../images/james.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { displayData, displayGameTime, loadData, loadGameTime } from '../../utilities/loadData';
import './User.css'
const User = (props) => {
    const showToastMessage = () => {
        toast.success('Success Notification !', {
            position: toast.POSITION.TOP_CENTER
        });
    };
    const { exerciseTime, handleExerciseTime } = props;
    console.log(handleExerciseTime);
    let totalGameTime = 0;
    for (const gameTime of exerciseTime) {
        totalGameTime += gameTime.time;
    }
    const getBreakTime = (breakTime) => {
        loadData(breakTime);
    }

    loadGameTime(totalGameTime);
    const savedTime = displayData();
    const savedGameTime = displayGameTime();
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
                    <p onClick={() => getBreakTime(10, window.location.reload(false))}>10s</p>
                    <p onClick={() => getBreakTime(20, window.location.reload(false))}>20s</p>
                    <p onClick={() => getBreakTime(30, window.location.reload(false))}>30s</p>
                    <p onClick={() => getBreakTime(40, window.location.reload(false))}>40s</p>
                    <p onClick={() => getBreakTime(50, window.location.reload(false))}>50s</p>
                </div>
            </div>
            <div className='game-details-time'>
                <p>Total Game Details</p>
                <div className='game-detail'>
                    <p>Game Time</p>
                    <p>{savedGameTime}seconds</p>
                </div>
                <div className='game-break'>
                    <p>Break Time</p>
                    <p>{savedTime}seconds</p>
                </div>
            </div>

            <div>
                <button className='btn-activity' onClick={showToastMessage}>
                    <p className='activity-text'>Activity Completed</p>
                </button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default User;