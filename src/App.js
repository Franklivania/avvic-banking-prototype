import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing/Landing';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/' element={<Landing />}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
