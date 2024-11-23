import { useState, useEffect } from 'react';
import User from '../users/User';

const usePostList = ( header, Posts ) => {
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


    return { posts, handleBookmark, handleShow };
}

export default usePostList;