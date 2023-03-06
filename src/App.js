import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import PageLoader from './Pages/PageLoader/PageLoader';

function App() {
  return (
    <div className="App">
      {/* <PageLoader /> */}
      <Router>
        <Routes>
          <Route path='/' element={<Landing />}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
