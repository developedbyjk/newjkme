import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home';
import About from './About';
import More from './More';
import Projects from './Projects';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index path="/" element={<Home/>}/>
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} />
      <Route path="more" element={<More />} />
    </Routes>
    </BrowserRouter>

  )
}

export default App;
