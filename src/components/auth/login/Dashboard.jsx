import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './Dashboard'; 

function App() {
  return (
    <Router>
      <Route path="/dashboard" component={Dashboard} />
      // Tus otras rutas aquí
    </Router>
  );
}

export default App;
