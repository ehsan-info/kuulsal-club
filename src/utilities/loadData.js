const loadData = breakTime => {
    let breakTimeData = {};
    // localStorage.setItem(breakTime, 1);
    /* const listData = breakTimeData[breakTime];
    if (listData) {
        breakTimeData[breakTime] = listData + 1;
    }
    else {
        breakTimeData[breakTime] = 1;
    } */
    //get data from local storage
    breakTimeData[breakTime] = breakTime;
    localStorage.setItem('break-data', JSON.stringify(breakTimeData));
}
const displayData = () => {
    let storedTime = {};
    const storedData = localStorage.getItem('break-data');
    if (storedData) {
        storedTime = JSON.parse(storedData);
        let saveTime;
        for (const storeTime in storedTime) {
            saveTime = storeTime;
        }
        return saveTime;
    }
    else {
        return 0;
    }
}
const loadGameTime = gameTime => {
    let gameTimeData = {};
    const storedData = localStorage.getItem('game-time');
    if (storedData) {
        gameTimeData[gameTime] = gameTime;
    }
    localStorage.setItem('game-time', JSON.stringify(gameTimeData));
}
const displayGameTime = () => {
    let storedTime = {};
    const storedData = localStorage.getItem('game-time');
    if (storedData) {
        storedTime = JSON.parse(storedData);
        let saveTime;
        for (const storeTime in storedTime) {
            saveTime = storeTime;
        }
        return saveTime;
    }
    else {
        return 0;
    }
}
export { loadData, displayData, loadGameTime, displayGameTime }