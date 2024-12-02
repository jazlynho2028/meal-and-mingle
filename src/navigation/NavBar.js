import { Link } from 'react-router-dom';
import '/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/navigation/NavBar.css';
import useUsers from '/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/common/users/useUsers.js';

const Nav = (props) => {
  return (
    <nav className='nav'>{props.children}</nav>
  )
}
const LeftNav = (props) => {
  return (
    <section className='navTopLeft'>{props.children}</section>
  )
}
const LogoLink = () => {
  return (
    <Link to='/' className='link'>
      <button />
      <h1>Meal and Mingle</h1>
    </Link>
  )
}
const RightNav = (props) => {
  return (
    <section className='navTopRight'>{props.children}</section>
  )
}
const HomeLink = () => {
  return (
    <Link to='/' className='link'>
      <h1>Home</h1>
    </Link>
  )
}
const MessagesLink = () => {
  return (
    <Link to='/messages' className='link'>
      <h1>Messages</h1>
    </Link>
  )
}
const ProfileLink = () => {
  const { selectedUser, loading } = useUsers();
  if (loading) {
    return <p>Loading Profile Link...</p>
  }

  return (
    <Link to='/profile' className='link'>
      <h1>{selectedUser.name}</h1>
      <button className='userIcon' style={{ backgroundColor: selectedUser.color }}>{selectedUser.initials}</button>
    </Link>
  )
}
function NavBar() {
  return (
    <Nav>
      <LeftNav>
        <LogoLink />
      </LeftNav>
      <RightNav>
        <HomeLink />
        <MessagesLink />
        <ProfileLink />
      </RightNav>
    </Nav>
  )
}

export default NavBar;