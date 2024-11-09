import { Link } from 'react-router-dom';
import './NavBar.css';

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
      <button/>
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
const ProfileLink = (props) => {
  return (
    <Link to='/profile' className='link'>
      <h1>{props.name}</h1>
      <button className='userIcon' style={{backgroundColor: props.color}}>{props.initials}</button>
    </Link>
  )
}
function NavBar(props) {
  return (
    <Nav>
      <LeftNav>
        <LogoLink/>
      </LeftNav>
      <RightNav>
        <HomeLink/>
        <MessagesLink/>
        <ProfileLink name={props.name} color={props.color} initials={props.initials}/>
      </RightNav>
    </Nav>
  )
}

export default NavBar;