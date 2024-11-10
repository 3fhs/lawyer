import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Writeing from './pages/write/Writeing';
import WeAre from './pages/we-are/WeAre';
import Contact from './pages/contact/Contact';
import AnyLaw from './componentes/any-law/AnyLaw';
import LinkTeam from './componentes/team/LinkTeam';
import LogIn from './pages/form/LogIn';
import Register from './pages/form/Register';
import Consultations from './pages/consultations/Consultations';
import DashBoard from './pages/dash-board/DashBoard';
import Profile from 'pages/dash-board/your-profile/Profile';
import Team from 'pages/dash-board/your-team/Team';
import Report from 'pages/dash-board/all-report/Report';
import TestimonialControl from 'pages/dash-board/testimonials/TestimonialControl';
import LoginControl from 'pages/dash-board/login/LoginControl';
import RegisterControl from 'pages/dash-board/register/RegisterControl';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='we-are' element={<WeAre/>}/>
        <Route path='write' element={<Writeing/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='/report/:id' element={<AnyLaw/>}/>
        <Route path='/team/:id' element={<LinkTeam/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/consultations' element={<Consultations/>}/>
        {/* dash board */}
        <Route path='/dash-board' element={<DashBoard/>}>        
          <Route index element={<Profile/>}/>
          <Route path='team' element={<Team/>}/>
          <Route path='report' element={<Report/>}/>
          <Route path='testimonial' element={<TestimonialControl/>}/>
          <Route path='login' element={<LoginControl/>}/>
          <Route path='register' element={<RegisterControl/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
