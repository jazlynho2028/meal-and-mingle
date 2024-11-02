import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home, { POSTS } from './Home.js';
import Profile from './Profile.js';
import { getCSSVar } from './variables.js';

const user = {
  name: 'First Last',
  initials: 'FL',
  color: getCSSVar('--purpleIcon'),
  class: '202X',
  school: ['A School'],
  major: ['Some Interesting Major', 'Some Other Major'],
  bio: 'Really interesting things about my background, interests, hobbies, etc.',
  posts: [{name: 'First Last',
            initials: 'FL',
            iconColor: getCSSVar('--purpleIcon'),
            location: 'Sargent Dining Commons',
            start: new Date('2024-09-25T12:30'),
            end: new Date('2024-09-25T13:00'),
            bookmarked: false,
            show: true}],
  saved: [POSTS[0]]
}

function NavBar(props) {
  return (
    <nav className='nav'>
      {/* Top left */}
      <section className='navTopLeft'>
        <Link to='/' className='link logoButton'>
            <div className='logoCircle'></div>
            <h1>Meal and Mingle</h1>
        </Link>
      </section>
      {/* Top right */}
      <section className='navTopRight'>
        <Link to='/' className='link navButton'>
            <h1>Home</h1>
        </Link>
        <Link to='/messages' className='link navButton'>
            <h1>Messages</h1>
        </Link>
        <Link to='/profile' className='link navProfile'>
          <button className='navButton'><h1>{props.name}</h1></button>
          <button className='userIcon headerVariation' style={{backgroundColor: props.color}}>{props.initials}</button>
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

          <NavBar name={user.name} initials={user.initials} color={user.color}/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/messages' element={<div>Messages Page (coming soon)</div>}/>
            <Route path='/profile' element={<Profile name='First Last' initials='FL' color={user.color} class={user.class} school={user.school} major={user.major} bio={user.bio}/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;
export { user };
