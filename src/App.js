import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProjects'


function App() {
  return (
      <Router>
          <div>
              <Link to="/"> Home </Link>
              <Link to="/contact"> Contato </Link>
              <Link to="/company"> Empresa </Link>
              <Link to="/newProject"> Novo Projeto </Link>
          </div>
          <Routes>
              <Route exact path="/" element={<Home />}> </Route>
              <Route exact path="/company" element={<Company />}> </Route>
              <Route path="/contact" element={<Contact />}> </Route>
              <Route path="/newproject" element={<NewProject/>}> </Route>
          </Routes>
          <p> Footer </p>
      </Router>

  );
}

export default App;
