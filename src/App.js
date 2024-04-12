import {BrowserRouter,Routes,route} from 'react-router-dom'
import './App.css';
import {Register} from './components/auth/Register.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='routes'>
          <Register/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
