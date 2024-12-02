import AllUsers from "/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/common/users/AllUsers.js";

// stores information for all posts
const AllPosts = [];

const createPost = (id, user, location, start, end) => {
  const post = {
    id: id,
    user: user,
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