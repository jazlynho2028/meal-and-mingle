import { useState, useEffect } from 'react';
import User from '../users/User';
import Post from './Post';
import './Post.css';

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

  export default PostList;