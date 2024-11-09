import '../App.css';
import './Profile.css';
import UserIcon from '../common/buttons/UserIcon.js';
import Filter from '../common/Filter.js';
import CreateButton from '../common/buttons/CreateButton.js';
import User from '../common/users/User.js';
import PostList from '../common/posts/PostList.js';

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
      <div class='subjectDetails'>
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
function Profile(props) {
    return (
      <ProfileBody>
        <TopFrame>
          <UserIcon color={props.color} initials={props.initials}/>
          <Info>
            <NameClass name={props.name} class={props.class}/>
            <OtherInfo>   
              <SchoolMajor>
                <School school={props.school}/>
                <Major major={props.major}/>
              </SchoolMajor>
              <Bio bio={props.bio}/>
            </OtherInfo>
          </Info>
        </TopFrame>
        <BottomFrame>
          <Filter/>
          <PostList header='My Posts' Posts={User.posts} isProfileList={true} isUserSavedList={false}/>
          <PostList header='Saved Posts' Posts={User.saved} isProfileList={true} isUserSavedList={true}/>
          <CreateButton/>
        </BottomFrame>
      </ProfileBody>
    )
  }

  export default Profile;