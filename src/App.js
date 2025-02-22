import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './Header'
import Footer from "./Footer";
import PostProject from "./PostProject/postproject"
import Projects from "./projects/projects"

function App() {
  return (
    <Router>
       <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post-project" element={<PostProject />} />
        <Route path="/projects" element={<Projects />} />

      </Routes>
      <Footer/>

    </Router>
  );
}

export default App;
