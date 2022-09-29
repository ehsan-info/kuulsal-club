import logo from './images/Logo.png';
import './App.css';
import Sports from './components/Sports/Sports';

function App() {
  return (
    <div className='container'>
      <div className="body-container">
        <div className='body-left'>
          <img src={logo} alt="" />
          <Sports></Sports>
        </div>
        <div className='body-right'>
          <h2>Right Side</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
