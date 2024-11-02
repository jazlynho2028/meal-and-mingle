import { useState, useEffect } from 'react';
import './App.css';
import './App.js';
import './Profile.css';
import { getCSSVar } from './variables.js';

// displays profile page
function Profile(props) {
    return (
      <section className='profileBody'>
        <section className='topFrame'>
            <button className='userIcon profileVariation' style={{backgroundColor: props.color}}>{props.initials}</button>
            <section className='infoContainer'>
              <div className='nameClassContainer'>
                <h3>{props.name}</h3>
                <p className='postText profileClass'>Class of {props.class}</p>
              </div>
              {/* bottom info container */}
              <div className='schoolMajorBioContainer'>
                {/* separate school/major and bio */}              
                <div className='schoolMajorContainer'>
                  {/* School and Details */}
                  <div className='subjectDetails'>
                    {/* School */}
                    <div className='schoolMajorBioTextHead'>School:</div>
                    {/* Details */}
                      {/* Get all schools */}
                      {props.school.map((school) => {
                        return (<button className='detail'>{school}</button>)
                      })}
                  </div>
                  {/* Major and Details */}
                  <div className='subjectDetails'>
                    {/* Major */}
                    <div className='schoolMajorBioTextHead'>Major:</div>
                    {/* Details */}
                    <div className='detailsContainer'>
                      {/* Get all majors */}
                      {props.major.map((major) => {
                        return (<button className='detail'>{major}</button>)
                      })}
                    </div>
                  </div>
                </div>
                {/* Bio and Details */}
                <div className='subjectDetails'>
                    {/* Bio */}
                    <div className='schoolMajorBioTextHead'>Bio:</div>
                    {/* Details */}
                    <div className='detailsContainer'>
                      <p className='bioText'>{props.bio}</p>
                    </div>
                  </div>
              </div>

            </section>
        </section>
        <section className='bottomFrame'>
            hi again
        </section>
      </section>
    )
  }

  export default Profile;