import logo from './logo.svg';
import './App.css';
import { ProgressBar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const county = 35;
  const country = 20;
  return (
    <div className="progressPage">
      <h3>React Bootstrap Progress Bar Demo</h3>
      <div className="progressBars">
        <br></br>
        <p className="progressLabel">County Coverage: </p>
        <p>
          <ProgressBar onClick={handleClick} style={{cursor:'pointer'}} className="ProgressBar" now={county} label={`${county}%`}/>
        </p>
        <br></br>
        <p className="progressLabel">Country Coverage: </p>
        <p>
          <ProgressBar className="ProgressBar" now={country} label={`${country}%`}/>
        </p>
      </div>
    </div>
  );
}

const handleClick = () => {console.log("Hello world!");}

export default App;
