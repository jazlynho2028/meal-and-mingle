import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/App.css';
import Home from '/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/home/Home.js';
import Profile from '/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/profile/Profile.js';
import Messages from '/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/messages/Messages.js';
import NavBar from '/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/navigation/NavBar.js';
import useUsers from '/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/common/users/useUsers.js';

function App() {
  const { loading } = useUsers();
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Router>
      <div className='App'>
        <div>
          <meta charSet='UTF-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
          <title>INDEX</title>
          <link rel='stylesheet' href='App.css' />

          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/messages' element={<Messages />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;
