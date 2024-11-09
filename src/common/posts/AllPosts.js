import AllUsers from "../users/AllUsers";

// stores information for all posts
const AllPosts = [];

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
    AllPosts.push(post);
  
    AllUsers.forEach(user => {
      user.display.push(post);
    })
} 

export default AllPosts;
export { createPost };