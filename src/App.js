import {BrowserRouter,Routes,route} from 'react-router-dom'
import './App.css';
import {Register} from './components/auth/Register/Register.jsx';
import {Login} from './components/auth/login/Login.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='routes'>
          <Login/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
