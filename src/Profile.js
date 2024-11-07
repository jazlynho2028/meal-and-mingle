import './App.css';
import './Profile.css';
import { User, Filter, CreateButton, PostList } from './variables.js';

// displays profile page
function Profile(props) {
    return (
      <section className='profileBody'>
        <section className='topFrame'>
            <button className='userIcon' style={{backgroundColor: props.color}}>{props.initials}</button>
            <section className='infoContainer'>
              <div className='nameClassContainer'>
                <h3>{props.name}</h3>
                <p className='postText'>Class of {props.class}</p>
              </div>
              {/* bottom info container */}
              <div className='schoolMajorBioContainer'>
                {/* separate school/major and bio */}              
                <div className='schoolMajorContainer'>
                  {/* School and Details */}
                  <section>
                    {/* School */}
                    <h3>School:</h3>
                    <div>
                      {props.school.map((school) => {
                        return (<button>{school}</button>)
                      })}
                    </div>
                  </section>
                  {/* Major and Details */}
                  <section>
                    <h3>Major:</h3>
                    <div>
                      {/* Get all majors */}
                      {props.major.map((major) => {
                        return (<button>{major}</button>)
                      })}
                    </div>
                  </section>
                </div>
                {/* Bio and Details */}
                <section>
                  <h3>Bio:</h3>
                  <div>
                    <p>{props.bio}</p>
                  </div>
                </section>
              </div>
            </section>
        </section>
        <CreateButton/>
        <section className='bottomFrame'>
          <button><Filter/></button>
          <section className='postList'>
            <h2>My Posts</h2>
            <PostList Posts={User.posts} profileList={true} userSavedList={false}/>
          </section>
          <section className='postList'>
            <h2>Saved Posts</h2>
            <PostList Posts={User.saved} profileList={true} userSavedList={true}/>
          </section>
        </section>
      </section>
    )
  }

  export default Profile;