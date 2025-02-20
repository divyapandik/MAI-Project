import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PostProject from './pages/PostProject';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post-project" element={<PostProject />} />
      </Routes>
    </Router>
  );
}

export default App;
