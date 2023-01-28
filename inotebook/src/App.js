import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import CheckRoute from './components/CheckRoute';
import NoteState from './context/notes/NoteState';

function App() {
  return (
    <> 
    <NoteState>
      <Router>
        <Navbar /> 
          <div className='container'>
            <Routes>
              <Route exact path="/"  element={<CheckRoute/>}> </Route>
              <Route exact path="/about" element={<About/>}> </Route> 
              <Route exact path="/login" element={<Login/>}> </Route>
              <Route exact path="/signup" element={<Signup/>}> </Route> 
            </Routes>
          </div>
      </Router> 
      </NoteState>
    </>
  );
}

export default App;