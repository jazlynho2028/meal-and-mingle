import { useState, useEffect } from 'react';



const getCSSVar = (variable) => {
    return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
  }

// stores information for all posts
const POSTS = [];

const Users = [
  {
    name: 'First Last',
    initials: 'FL',
    color: getCSSVar('--purpleIcon'),
    class: '202X',
    school: ['A School'],
    major: ['Some Interesting Major', 'Some Other Major'],
    bio: 'Really interesting things about my background, interests, hobbies, etc.',
    posts: [],
    saved: []
  },
  {
    name: 'John Doe',
    initials: 'JD',
    color: getCSSVar('--pinkIcon'),
    class: '2025',
    school: ['Bienen, Weinberg'],
    major: ['Trumpet Performance', 'Psychology'],
    bio: 'I like touching grass.',
    posts: [],
    saved: []
  },
  {
    name: 'Some Person',
    initials: 'SP',
    color: getCSSVar('--yellowIcon'),
    class: '2027',
    school: ['McCormick'],
    major: ['Mechanical Engineering'],
    bio: 'I don\'t like touching grass.',
    posts: [],
    saved: []
  }
]

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
} 

// placeholders before create button functions are implemented
createPost(Users[0], 'Sargent Dining Commons', new Date('2024-09-25T12:30'), new Date('2024-09-25T13:00'));
createPost(Users[1], 'Foster Walker Plex East', new Date('2024-10-17T16:00'), new Date('2024-10-17T18:00'));
createPost(Users[2], 'Allison Dining Commons/ Sargent Dining Commons', new Date('2024-10-14T20:00'), new Date('2024-10-14T21:30'));

// current user
const User = Users[0];

// contains the displayed list of posts
// profileList: true if list is the user's personal or saved lists
// userSavedList: true if list is the user's saved list
const PostList = ({Posts, profileList, userSavedList}) => {
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
    setPosts(newPosts.filter(item => item.show));
  }

  // when saved button is clicked
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
    if (profileList)
    {
      if (userSavedList)
        console.log('Current Saved Posts: ', posts);
      else
        console.log('Current User Posts: ', posts);
    }
    else
    {
      console.log('Current Home Posts: ', posts);
    }
    
  },  [posts])

  return (
    <section className='postList'>
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
                profileList={profileList}
                userSavedList={userSavedList}
                />
        )
      })}
    </section>
  )
}
// defines how a post is displayed
function Post({profileList, userSavedList,
  ...props}) {
  const day = props.start.toLocaleString('default', {weekday: 'short'});
  const month = ((props.start.getMonth()) + 1).toString().padStart(2, '0');
  const date = props.start.getDate().toString().padStart(2, '0');
  const startTime = props.start.toLocaleString('default', {hour: '2-digit', minute: '2-digit'});
  const endTime = props.end.toLocaleString('default', {hour: '2-digit', minute: '2-digit'});

  // only display a post in if the list it's in is not the user's saved list
  // if it is the user's saved list, only display if bookmarked is true
  return (
    (!userSavedList || (userSavedList && props.bookmarked)) && <div className='post'>
      <button className='userIcon' style={{backgroundColor: props.iconColor}}>{props.initials}</button>
      {/* Right side of post */}
      <div className='colContainer'>
        {!profileList && <XButton handleShow={props.handleShow}/>}
        {/* Top section of right side */}
        <div className='postTextBlock'>
          {/* Name */}
          <div className='postText'>{props.name}</div>
          {/* Location(s) */}
          <div className='postText locationText'>{props.location}</div>
          {/* Separator line */}
          <div className='postLine' />
          {/* Date and Time */}
          <div className='postDateTime'>
            {/* Date */}
            <div className='postText'>{`${day} ${month}/${date}`}</div>
            {/* Time */}
            <div className='postText'>{`${startTime} - ${endTime}`}</div>
          </div>
        </div>
        {/* Send and Save buttons */}
        <div className='sendSaveContainer'>
          <SendButton/>
          {/* Save button */}
          <SaveButton bookmarked={props.bookmarked}
                      handleBookmark={props.handleBookmark}/>
        </div>
      </div>
    </div>
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
      {/* 'x' button */}
      <button className='xButton' onClick={handleShow}>
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
    <button className='sendSaveButtons'>
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
    <button className='sendSaveButtons' onClick={handleBookmark}>
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

export { getCSSVar, User, POSTS, PostList, Post, Filter, CreateButton, XButton, SendButton, SaveButton };