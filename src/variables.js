import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const getCSSVar = (variable) => {
    return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
  }

const UserIcon = (props) => {
  return (
    <button className='userIcon' style={{backgroundColor: props.iconColor}}>
      {props.initials}
    </button>
  )
}

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

// stores information for all posts
const POSTS = [];

const Users = [
  {
    name: 'First Last',
    initials: 'FL',
    color: getCSSVar('--purpleIcon'),
    class: 2023,
    school: ['A School'],
    major: ['Some Interesting Major', 'Some Other Major'],
    bio: 'Really interesting things about my background, interests, hobbies, etc.',
    posts: [],
    saved: [],
    display: []
  },
  {
    name: 'John Doe',
    initials: 'JD',
    color: getCSSVar('--pinkIcon'),
    class: 2025,
    school: ['Bienen, Weinberg'],
    major: ['Trumpet Performance', 'Psychology'],
    bio: 'I like touching grass.',
    posts: [],
    saved: [],
    display: []
  },
  {
    name: 'Some Person',
    initials: 'SP',
    color: getCSSVar('--yellowIcon'),
    class: 2027,
    school: ['McCormick'],
    major: ['Mechanical Engineering'],
    bio: 'I don\'t like touching grass.',
    posts: [],
    saved: [],
    display: []
  }
]

// fetch users from database and add them to User
async function getAllUsers() {
  try {
    const response = await fetch("https://disc-assignment-5-users-api.onrender.com/api/users");
    if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const fetchedUsers = await response.json();
    
    // Map over fetched users to add missing properties with default values
    const newUsers = fetchedUsers.map(user => ({
        name: `${user.firstName} ${user.lastName}`,
        initials: `${user.firstName[0]}${user.lastName[0]}`,
        color: getCSSVar('--lightGray'),
        class: user.graduationYear,
        school: 'NA',
        major: user.major,
        bio: user.bio,
        posts: [],
        saved: [],
        display: []
    }))

    // Add new users to the Users array
    Users.push(...newUsers);

    console.log("Updated Users array:", Users);
    return Users;
  } 
  catch (error) {
    console.error("Failed to fetch users:", error);
  }
}

// fetch and add users
getAllUsers();

const createPost = (user, location, start, end) => {
  const post = {
    name: user.name,
    initials: user.initials,
    iconColor: user.color,
    location: location,
    start: start,
    end: end,
    bookmarked: false,
    show: true,
  }
  user.posts.push(post);
  POSTS.push(post);

  Users.forEach(user => {
    user.display.push(post);
  })
} 

// placeholders before create button functions are implemented
createPost(Users[0], 'Sargent Dining Commons', new Date('2024-09-25T12:30'), new Date('2024-09-25T13:00'));
createPost(Users[1], 'Foster Walker Plex East', new Date('2024-10-17T16:00'), new Date('2024-10-17T18:00'));
createPost(Users[2], 'Allison Dining Commons/ Sargent Dining Commons', new Date('2024-10-14T20:00'), new Date('2024-10-14T21:30'));

// current user
const User = Users[0];

// contains the displayed list of posts
// isProfileList: true if list is the user's personal or saved lists
// isUserSavedList: true if list is the user's saved list
const PostList = ({header, Posts, isProfileList, isUserSavedList}) => {
  const [posts, setPosts] = useState(Posts);

  const handleBookmark = (index) => {
    const newPosts = [...posts];
    newPosts[index].bookmarked = !newPosts[index].bookmarked;
    
    if (newPosts[index].bookmarked) {
      User.saved.push(newPosts[index]);
    }
    else {
      User.saved = User.saved.filter(post => post.name !== newPosts[index].name);
    }

    setPosts(newPosts);
  }

  const handleShow = (index) => {
    const newPosts = [...posts];
    newPosts[index].show = false;
    
    User.display = User.display.filter(post => post.name !== newPosts[index].name);
    setPosts(newPosts.filter(post => post.name !== newPosts[index].name));
  }

  // when save button is clicked
  useEffect(() => {
    Posts.forEach((post, index) => {
      if (post.bookmarked) {
        console.log('Post ' + index + ' is saved');
      } 
      else {
        console.log('Post ' + index + ' is not saved');
      }
    })
  }, [posts])

  // when x button is clicked
  useEffect(() => {
    if (isProfileList) {
      if (isUserSavedList)
        console.log('Current Saved Posts: ', posts);
      else
        console.log('Current User Posts: ', posts); // shouldn't ever run
    }
    else {
      console.log('Current Home Posts: ', posts);
    }
  },  [posts])

  return (
    <section className='postList'>
      <h2>{header}</h2>
      {posts.map((post, index) => {
        return (
          <Post name={post.name} 
                initials={post.initials} 
                iconColor={post.iconColor} 
                location={post.location} 
                start={post.start} 
                end={post.end} 
                bookmarked={post.bookmarked} 
                show={post.show} 
                handleBookmark={() => handleBookmark(index)}
                handleShow={() => handleShow(index)}
                isProfileList={isProfileList}
                isUserSavedList={isUserSavedList}
          />
        )
      })}
    </section>
  )
}

const APost = (props) => {
  return (
    ((!props.isUserSavedList && props.isProfileList) || (props.isUserSavedList && props.bookmarked) || (!props.isProfileList && props.show)) &&
    <div className='post'>{props.children}</div>
  )
}
const RightSide = (props) => {
  return (
    <div className='colContainer'>{props.children}</div>
  )
}
const X = (props) => {
  return (
    <div>
      {!props.isProfileList && <XButton handleShow={props.handleShow}/>}
    </div>
  )
}
const PostInfo = (props) => {
  return (
    <div className='postTextBlock'>{props.children}</div>
  )
}
const Name = (props) => {
  return (
    <p>{props.name}</p>
  )
}
const Location = (props) => {
  return (
    <p className='locationText'>{props.location}</p>
  )
}
const Line = () => {
  return (
    <div className='postLine'/>
  )
}
const DateTime = (props) => {
  return (
    <div className='postDateTime'>{props.children}</div>
  )
}
const DATE = (props) => {
  return (
    <p>{`${props.day} ${props.month}/${props.date}`}</p>
  )
}
const TIME = (props) => {
  return (
    <p>{`${props.startTime} - ${props.endTime}`}</p>
  )
}
const SendSave = (props) => {
  return (
    <div className='sendSaveContainer'>{props.children}</div>
  )
}
// defines how a post is displayed
function Post(props) {
  const day = props.start.toLocaleString('default', {weekday: 'short'});
  const month = ((props.start.getMonth()) + 1).toString().padStart(2, '0');
  const date = props.start.getDate().toString().padStart(2, '0');
  const startTime = props.start.toLocaleString('default', {hour: '2-digit', minute: '2-digit'});
  const endTime = props.end.toLocaleString('default', {hour: '2-digit', minute: '2-digit'});

  // only display a post in if the list it's in is not the user's saved list
  // if it is the user's saved list, only display if bookmarked is true
  return (
    <APost isProfileList={props.isProfileList} isUserSavedList={props.isUserSavedList} bookmarked={props.bookmarked} show={props.show}>
      <UserIcon initials={props.initials} iconColor={props.iconColor}/>
      <RightSide>
          <X isProfileList={props.isProfileList} handleShow={props.handleShow}/>
          {/* Top section of right side */}
          <PostInfo>
            <Name name={props.name}/>
            <Location location={props.location}/>
            <Line/>
            <DateTime>
              <DATE day={day} month={month} date={date}/>
              <TIME startTime={startTime} endTime={endTime}/>
            </DateTime>
          </PostInfo>
          <SendSave>
            <SendButton/>
            <SaveButton bookmarked={props.bookmarked}
                        handleBookmark={props.handleBookmark}/>
          </SendSave>
      </RightSide>
    </APost>
  )
}


// display filter button
const Filter = () => {
  return (
    <button className='filterButton'>
      <img src='https://cdn-icons-png.flaticon.com/128/7693/7693332.png' alt='filter' style={{width: 15, height: 'auto', filter: 'invert(1)'}} />
    </button>
  )
}
// display create button
const CreateButton = () => {
  return (
    <button className='createButton'>
      <img src='https://cdn-icons-png.flaticon.com/128/992/992651.png' alt='add' style={{width: 33, height: 'auto', filter: 'invert(1)'}} />
      Create
    </button>
  )
}
// display x button
const XButton = ({handleShow}) => {
  return (
    <div className='xButtonContainer'>
      <button onClick={handleShow}>
        <img 
          src='https://cdn-icons-png.flaticon.com/128/1828/1828778.png' 
          alt='Close' 
          style={{
            width: 6,
            height: 'auto',
            filter: 'invert(41%) sepia(2%) saturate(3212%) hue-rotate(212deg) brightness(102%) contrast(78%)'
          }} 
        />
      </button>
    </div>
  )
}
// display send button
const SendButton = () => {
  return (
    <button>
      <img 
        src='https://cdn-icons-png.flaticon.com/128/3024/3024593.png' 
        alt='Send' 
        style={{
          width: 12,
          height: 'auto',
          filter: 'invert(31%) sepia(64%) saturate(229%) hue-rotate(212deg) brightness(89%) contrast(91%)'
        }} 
      />
    </button>
  )
}
// display save button
function SaveButton({bookmarked, handleBookmark}) {
  const bookmarkImg = bookmarked ? 'https://cdn-icons-png.flaticon.com/128/102/102279.png' : 'https://cdn-icons-png.flaticon.com/128/5662/5662990.png'; 
  
  return (
    <button onClick={handleBookmark}>
      <img 
        src={bookmarkImg}
        alt='Saved' 
        style={{
          width: 12,
          height: 'auto',
          filter: 'invert(31%) sepia(64%) saturate(229%) hue-rotate(212deg) brightness(89%) contrast(91%)'
        }} 
      />
    </button>
  )
}

export { getCSSVar, UserIcon, NavBar, User, PostList, Post, Filter, CreateButton, XButton, SendButton, SaveButton };