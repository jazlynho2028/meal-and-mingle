import '/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/App.css';
import '/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/profile/Profile.css';
import UserIcon from '/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/common/buttons/UserIcon.js';
import Filter from '/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/common/Filter.js';
import CreateButton from '/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/common/buttons/CreateButton.js';
import User from '/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/common/users/User.js';
import PostList from '/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/common/posts/PostList.js';
import useUsers from '/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/common/users/useUsers.js';

const ProfileBody = (props) => {
  return (
    <section className='profileBody'>
      {props.children}
    </section>
  )
}
const TopFrame = (props) => {
  return (
    <section className='topFrame'>
      {props.children}
    </section>
  )
}
const Info = (props) => {
  return (
    <section className='infoContainer'>
      {props.children}
    </section>
  )
}
const NameClass = (props) => {
  return (
    <div className='nameClassContainer'>
      <h3>{props.name}</h3>
      <p className='postText'>Class of {props.class}</p>
    </div>
  )
}
const OtherInfo = (props) => {
  return (
    <div className='schoolMajorBioContainer'>
      {props.children}
    </div>
  )
}
const SchoolMajor = (props) => {
  return (
    <div className='schoolMajorContainer'>
      {props.children}
    </div>
  )
}
const School = (props) => {
  return (
    <section>
      <h3>School:</h3>
      <div>
        {props.school.map((school) => {
          return (<button key={school}>{school}</button>)
        })}
      </div>
    </section>
  )
}
const Major = (props) => {
  return (
    <section>
      <h3>Major:</h3>
      <div>
        {props.major.map((major) => {
          return (<button key={major}>{major}</button>)
        })}
      </div>
    </section>
  )
}
const Bio = (props) => {
  return (
    <section>
      <h3>Bio:</h3>
      <div className='subjectDetails'>
        <p>{props.bio}</p>
      </div>
    </section>
  )
}
const BottomFrame = (props) => {
  return (
    <section className='bottomFrame'>
      {props.children}
    </section>
  )
}

// displays profile page
function Profile() {
  const { selectedUser, loading } = useUsers();

  if (loading) {
    return (
      <p>Loading Profile...</p>
    )
  }

  return (
    <ProfileBody>
      <TopFrame>
        <UserIcon user={User} />
        <Info>
          <NameClass name={selectedUser.name} class={selectedUser.class} />
          <OtherInfo>
            <SchoolMajor>
              <School school={selectedUser.school} />
              <Major major={selectedUser.major} />
            </SchoolMajor>
            <Bio bio={selectedUser.bio} />
          </OtherInfo>
        </Info>
      </TopFrame>
      <BottomFrame>
        <Filter />
        <PostList header='My Posts' Posts={User.posts} isProfileList={true} isUserSavedList={false} />
        <PostList header='Saved Posts' Posts={User.saved} isProfileList={true} isUserSavedList={true} />
        <CreateButton />
      </BottomFrame>
    </ProfileBody>
  )
}

export default Profile;