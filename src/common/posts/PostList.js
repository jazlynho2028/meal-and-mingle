import '/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/common/posts/Post.css';
import usePostList from '/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/common/posts/usePostList.js';
import Card from '/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/common/card/Card.js';

const PostCard = ({ post, index, header, Posts }) => {
    const { handleBookmark, handleShow } = usePostList(header, Posts);

    const isProfileList = header === 'My Posts' || header.split(' ')[0] === 'Saved';
    const isUserSavedList = header.split(' ')[0] === 'Saved';

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

}

// contains the displayed list of posts
// isProfileList: true if list is the user's personal or saved lists
// isUserSavedList: true if list is the user's saved list
const PostList = ({ header, Posts }) => {
  const { posts } = usePostList(header, Posts);

  return (
    <section className='listsSection'>
      <h2>{header}</h2>
      <div className='list'>
        {posts.map((post, index) => {
          return (
            <PostCard
              post={post}
              index={index}
              header={header}
              Posts={Posts}
            />
          )
        })}
      </div>
    </section>
  )
}

export default PostList;