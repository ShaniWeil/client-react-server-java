// "בסיעתא דשמיא" //

import logo from './logo.svg';
import './App.css';
import Advertise from './components/Advertise';

function App() {
  return (
    <div className='App'>
      <h1 className='title'>
        ⬇️ פרסם כאן ⬇️
      </h1>

      <div className='container'>
        <Advertise />
        <Advertise />
        <Advertise />
        <Advertise />
      </div>
    </div>
  );
}

export default App;