import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Writeing from './pages/write/Writeing';
import WeAre from './pages/we-are/WeAre';
import Contact from './pages/contact/Contact';
import AnyLaw from './componentes/any-law/AnyLaw';
import LinkTeam from './componentes/team/LinkTeam';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='we-are' element={<WeAre/>}/>
        <Route path='write' element={<Writeing/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='/port/:id' element={<AnyLaw/>}/>
        <Route path='/team/:id' element={<LinkTeam/>}/>
      </Routes>
    </div>
  );
}

export default App;
