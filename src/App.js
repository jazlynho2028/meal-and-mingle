import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './Home.js';
import Profile from './Profile.js';
import { User } from './variables.js';

function NavBar(props) {
  return (
    <nav className='nav'>
      {/* Top left */}
      <section className='navTopLeft'>
        <Link to='/' className='link circleTextButtonContainer'>
            <button></button>
            <h1>Meal and Mingle</h1>
        </Link>
      </section>
      {/* Top right */}
      <section className='navTopRight'>
        <Link to='/' className='link'>
            <h1>Home</h1>
        </Link>
        <Link to='/messages' className='link'>
            <h1>Messages</h1>
        </Link>
        <Link to='/profile' className='link circleTextButtonContainer'>
          <h1>{props.name}</h1>
          <button className='userIcon' style={{backgroundColor: props.color}}>{props.initials}</button>
        </Link>
      </section>
    </nav>
  )
}

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
            <Route path='/messages' element={<div>Messages Page (coming soon)</div>}/>
            <Route path='/profile' element={<Profile name={User.name} initials={User.initials} color={User.color} class={User.class} school={User.school} major={User.major} bio={User.bio}/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;
