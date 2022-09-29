import logo from './images/Logo.png';
import './App.css';

function App() {
  return (
    <div className='container'>
      <div className="body-container">
        <div className='body-left'>
          <img src={logo} alt="" />
        </div>
        <div className='body-right'>
          <h2>Right Side</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
