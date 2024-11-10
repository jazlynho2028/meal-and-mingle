import { useState, useEffect } from 'react';
import User from '../users/User';
import './Post.css';
import Card from '../card/Card';

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
        User.saved = User.saved.filter(post => post.id !== newPosts[index].id);
      }
  
      setPosts(newPosts);
    }
  
    const handleShow = (index) => {
      const newPosts = [...posts];
      newPosts[index].show = false;
      
      User.display = User.display.filter(post => post.id !== newPosts[index].id);
      setPosts(newPosts.filter(post => post.id !== newPosts[index].id));
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
      console.log(`Current ${header}: `, posts);
    },  [posts])
  
    return (
      <section className='postsSection'>
        <h2>{header}</h2>
        <div className='postList'>
          {posts.map((post, index) => {

            const day = post.start.toLocaleString('default', { weekday: 'short' });
            const month = ((post.start.getMonth()) + 1).toString().padStart(2, '0');
            const date = post.start.getDate().toString().padStart(2, '0');
            const startTime = post.start.toLocaleString('default', { hour: '2-digit', minute: '2-digit' });
            const endTime = post.end.toLocaleString('default', { hour: '2-digit', minute: '2-digit' });

            return (
              <Card key={post.id}
                    type={'complex'}
                    user={post.user}
                    hasX={!isProfileList}
                    topText={post.user.name}
                    mainText={post.location} 
                    hasLine={true}
                    bottomText={`${day} ${month}/${date}   ${startTime} - ${endTime}`}
                    bookmarked={post.bookmarked} 
                    show={post.show} 
                    handleBookmark={() => handleBookmark(index)}
                    handleShow={() => handleShow(index)}
                    isProfileList={isProfileList}
                    isUserSavedList={isUserSavedList}
              />
            )
          })}
        </div>
      </section>
    )
  }

  export default PostList;