import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { animateScroll } from 'react-scroll';
import Landing from './Pages/Landing/Landing';
import PageLoader from './Pages/PageLoader/PageLoader';

function App() {

  const handleScroll = () => {
    animateScroll.scrollMore(10);
  };

  return (
    <div className="App" onScroll={handleScroll}>
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
