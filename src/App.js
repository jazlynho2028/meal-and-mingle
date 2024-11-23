import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './home/Home.js';
import Profile from './profile/Profile.js';
import User from './common/users/User.js';
import Messages from './messages/Messages.js';
import NavBar from './navigation/NavBar.js';

function App() {
  return (
    <Router>
      <div className='App'>
        <div>
          <meta charSet='UTF-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
          <title>INDEX</title>
          <link rel='stylesheet' href='App.css' />

          <NavBar name={User.name} initials={User.initials} color={User.color}/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/messages' element={<Messages/>}/>
            <Route path='/profile' element={<Profile name={User.name} initials={User.initials} color={User.color} class={User.class} school={User.school} major={User.major} bio={User.bio}/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;
