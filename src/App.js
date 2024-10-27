import { useState, useEffect } from 'react';
import './App.css';

const getCSSVar = (variable) => {
  return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
};

function NavBar(props) {
  return (
    <nav className='nav'>
      {/* Top left */}
      <section className='navTopLeft'>
        <button className='navButton'>
            <div className='logoCircle' />
            <h1>MEAL AND MINGLE</h1>
        </button>
      </section>
      {/* Top right */}
      <section className='navTopRight'>
        <button className='navButton'>
            <h1>HOME</h1>
        </button>
        <button className='navButton'>
            <h1>MESSAGES</h1>
        </button>
        {/* PROFILE */}
        <div className='navProfile'>
          <button className='navButton'>
          <h1>{props.name}</h1>
          </button>
          <button className='userIcon headerVariation'>{props.initials}</button>
        </div>
      </section>
    </nav>
  );
}

// gets the 7 dates of current week
const WEEKDATES = (startDate) => {
  const dates = [];
  const currentDate = new Date(startDate);
  for (let i = 0; i < 7; i++) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dates;
}
// displays calendar header
const CalendarHead = () => {
  const [startDate, setStartDate] = useState(new Date('2024-10-06T00:00:00'));
  const currentDates = WEEKDATES(startDate);
  
  const handlePrevWeek = () => {
    const newStartDate = new Date(startDate);
    newStartDate.setDate(startDate.getDate() - 7);
    setStartDate(newStartDate);
  }
  const handleNextWeek = () => {
    const newStartDate = new Date(startDate);
    newStartDate.setDate(startDate.getDate() + 7);
    setStartDate(newStartDate);
  }
  
  useEffect(() => {
    console.log(currentDates);
  }, [currentDates])
  
  return (
    <div className='calendarHeader'>
      {/* MONTH */}
      <h4>{currentDates[0].toLocaleString('default', {month: 'long'})}</h4>
      {/* Calendar Nav */}
      <nav className='calendarNav'>
        {/* Backwards Button */}
        <button className='calendarNavButton' onClick={handlePrevWeek}>
            <img src='https://cdn-icons-png.flaticon.com/128/2989/2989988.png' alt='previous' style={{width: 25, height: 'auto', transform: 'scaleX(-1)', filter: 'invert(29%) sepia(46%) saturate(312%) hue-rotate(212deg) brightness(98%) contrast(89%)'}} />
        </button>
        {/* Week Label */}
        <div className='weekLabel'>
            {/* Days of the Week */}
            <div className='daysOfWeek'>
              {currentDates.map((date, index) => (
                <div key={index}><h5>{date.toLocaleString('default', {weekday: 'short'})}</h5></div>    
              ))}
            </div>
            {/* Dates of the Week */}
            <div className='daysOfWeek'>
              {currentDates.map((date, index) => (
                <div key={index}><h5 className='dateStyle'>{date.getDate().toString().padStart(2, '0')}</h5></div>    
              ))}
            </div>
        </div>
        {/* Forwards Button */}
        <button className='calendarNavButton' onClick={handleNextWeek}>
            <img src='https://cdn-icons-png.flaticon.com/128/2989/2989988.png' alt='next' style={{width: 25, height: 'auto', filter: 'invert(29%) sepia(46%) saturate(312%) hue-rotate(212deg) brightness(98%) contrast(89%)'}} />
        </button>
      </nav>
    </div>

    
  )
}

// contains the displayed list of posts
const PostList = () => {
  const [posts, setPosts] = useState(POSTS);

  const handleBookmark = (index) => {
    const newPosts = [...posts];
    newPosts[index].bookmarked = !newPosts[index].bookmarked;
    setPosts(newPosts);
  }

  useEffect(() => {
    posts.forEach((post, index) => {
      if (post.bookmarked) {
        console.log('Post ' + index + ' is saved');
      } else {
        console.log('Post ' + index + ' is not saved');
      }
    })
  })

  return (
    <section className='postList'>
      {posts.map((post, index) => {
        return (
          <Post name={post.name} 
                initials={post.initials} 
                iconColor={post.iconColor} 
                location={post.location} 
                day={post.day} 
                date={post.date} 
                startTime={post.startTime} 
                endTime={post.endTime} 
                bookmarked={post.bookmarked} 
                show={post.show} 
                handleBookmark={() => handleBookmark(index)}/>
        )
      })}
    </section>
  )
}
// defines how a post is displayed
function Post(props) {
  // Determine which bookmark image to show
  const bookmarkImg = props.bookmarked ? 'https://cdn-icons-png.flaticon.com/128/102/102279.png' : 'https://cdn-icons-png.flaticon.com/128/5662/5662990.png'; 

  return (
    <div className='post' onClick={props.handleBookmark}>
      <button className='userIcon' style={{backgroundColor: props.iconColor}}>{props.initials}</button>
      {/* Right side of post */}
      <div className='colContainer'>
        {/* 'x' button container */}
        <div className='xButtonContainer'>
          {/* 'x' button */}
          <button className='crossButton'>
            <img 
              src='https://cdn-icons-png.flaticon.com/128/1828/1828778.png' 
              alt='Close' 
              style={{
                width: 6,
                height: 'auto',
                filter: 'invert(41%) sepia(2%) saturate(3212%) hue-rotate(212deg) brightness(102%) contrast(78%)'
              }} 
            />
          </button>
        </div>
        {/* Top section of right side */}
        <div className='postTextBlock'>
          {/* Name */}
          <div className='postText' style={{ alignItems: 'end', marginRight: 'auto' }}>
            {props.name}
          </div>
          {/* Location(s) */}
          <div className='postText locationText'>{props.location}</div>
          {/* Separator line */}
          <div className='postLine' />
          {/* Date and Time */}
          <div className='rowContainer' style={{ gap: 10 }}>
            {/* Date */}
            <div className='postText'>{`${props.day} ${props.date}`}</div>
            {/* Time */}
            <div className='postText'>{`${props.startTime} - ${props.endTime}`}</div>
          </div>
        </div>
        {/* Send and Save buttons */}
        <div className='sendSaveContainer'>
          {/* Send button */}
          <button className='sendSaveButtons'>
            <img 
              src='https://cdn-icons-png.flaticon.com/128/3024/3024593.png' 
              alt='Send' 
              style={{
                width: 12,
                height: 'auto',
                filter: 'invert(31%) sepia(64%) saturate(229%) hue-rotate(212deg) brightness(89%) contrast(91%)'
              }} 
            />
          </button>
          {/* Save button */}
          <button className='sendSaveButtons'>
            <img 
              src={bookmarkImg}
              alt='Saved' 
              style={{
                width: 12,
                height: 'auto',
                filter: 'invert(31%) sepia(64%) saturate(229%) hue-rotate(212deg) brightness(89%) contrast(91%)'
              }} 
            />
          </button>
        </div>
      </div>
    </div>
  );
}
// stores information for all posts
const POSTS = [
  {
    name: 'John Doe',
    initials: 'JD',
    iconColor: getCSSVar('--pinkIcon'),
    location: 'Foster Walker Plex East',
    day: 'Thu',
    date: '10/17',
    startTime: '04:00PM',
    endTime: '06:00PM',
    bookmarked: true,
    show: true
  },
  {
    name: 'Some Person',
    initials: 'SP',
    iconColor: getCSSVar('--yellowIcon'),
    location: 'Allison Dining Commons/ Sargent Dining Commons',
    day: 'Mon',
    date: '10/14',
    startTime: '08:00PM',
    endTime: '09:30PM',
    bookmarked: false,
    show: true
  }
]

// stores all timestamps
const TIMES = [
  '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', 
  '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', 
  '7 PM', '8 PM', '9 PM'
]


function App() {
  return (
    <div className='App'>
      <div>
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
      <title>INDEX</title>
      <link rel='stylesheet' href='App.css' />
      {/* nav bar */}
      <NavBar name='FIRST LAST' initials='FL'/>
      {/* body */}
      <section className='body'>
          {/* Left Content */}
          <section className='leftFrame'>
          {/* Subheader */}
          <div className='subHeader'>
              <h2 style={{marginRight: 'auto'}}>POSTS</h2>
              <button className='filterButton'>
              <img src='https://cdn-icons-png.flaticon.com/128/7693/7693332.png' style={{width: 15, height: 'auto', filter: 'invert(1)'}} />
              </button>
          </div>
          {/* List of posts */}
          <PostList/>
          {/* Create Button */}
          <button className='createButton'>
              <img src='https://cdn-icons-png.flaticon.com/128/992/992651.png' alt='add' style={{width: 33, height: 'auto', filter: 'invert(1)'}} />
              CREATE
          </button>
          </section>
          {/* Right Content */}
          <section className='rightFrame'>
            {/* Calendar Header */}
            <CalendarHead/>
            {/* Below Calendar Nav Bar */}
            <section className='calendarBodyContainer'>
            {/* Time Markings */}
            <section className='timeMarkings'>
              {TIMES.map(time => (
                <h5 className='timeStyle' key={time}>{time}</h5>
              ))}
            </section>
            {/* Calendar Grid */}
            <section className='calendarGrid'>
                {/* Event: CLASS A Mon */}
                <div className='eventContainer'>
                {/* Side Bar */}
                <div className='rect' />
                {/* Event Info */}
                <div className='eventInfo'>
                    {/* Time */}
                    <div className='eventText'>
                    {/* Number */}
                    <div>10:00</div>
                    {/* AM/PM */}
                    <div>AM</div>
                    </div>
                    {/* Event Name */}
                    <div className='eventName'>CLASS A</div>
                    {/* Event Location */}
                    Somewhere
                </div>
                </div>
                {/* Event: CLASS A Wed */}
                <div className='eventContainer' style={{gridColumn: 'wedStart'}}>
                {/* Side Bar */}
                <div className='rect' />
                {/* Event Info */}
                <div className='eventInfo'>
                    {/* Time */}
                    <div className='eventText'>
                    {/* Number */}
                    <div>10:00</div>
                    {/* AM/PM */}
                    <div>AM</div>
                    </div>
                    {/* Event Name */}
                    <div className='eventName'>CLASS A</div>
                    {/* Event Location */}
                    Somewhere
                </div>
                </div>
                {/* Event: CLASS A Fri */}
                <div className='eventContainer' style={{gridColumn: 'friStart'}}>
                {/* Side Bar */}
                <div className='rect' />
                {/* Event Info */}
                <div className='eventInfo'>
                    {/* Time */}
                    <div className='eventText'>
                    {/* Number */}
                    <div>10:00</div>
                    {/* AM/PM */}
                    <div>AM</div>
                    </div>
                    {/* Event Name */}
                    <div className='eventName'>CLASS A</div>
                    {/* Event Location */}
                    Somewhere
                </div>
                </div>
                {/* Event: CLASS B Tue */}
                <div className='eventContainer' style={{gridColumn: 'tueStart', gridRow: 'AM9start / AM11start', backgroundColor: 'var(--blueEventO)'}}>
                {/* Side Bar */}
                <div className='rect' style={{backgroundColor: 'var(--blueEvent)'}} />
                {/* Event Info */}
                <div className='eventInfo'>
                    {/* Time */}
                    <div className='eventText'>
                    {/* Number */}
                    <div>09:00</div>
                    {/* AM/PM */}
                    <div>AM</div>
                    </div>
                    {/* Event Name */}
                    <div className='eventName'>CLASS B</div>
                    {/* Event Location */}
                    Someplace
                </div>
                </div>
                {/* Event: CLASS B Thu */}
                <div className='eventContainer' style={{gridColumn: 'thuStart', gridRow: 'AM9start / AM11start', backgroundColor: 'var(--blueEventO)'}}>
                {/* Side Bar */}
                <div className='rect' style={{backgroundColor: 'var(--blueEvent)'}} />
                {/* Event Info */}
                <div className='eventInfo'>
                    {/* Time */}
                    <div className='eventText'>
                    {/* Number */}
                    <div>09:00</div>
                    {/* AM/PM */}
                    <div>AM</div>
                    </div>
                    {/* Event Name */}
                    <div className='eventName'>CLASS B</div>
                    {/* Event Location */}
                    Someplace
                </div>
                </div>
                {/* Event: LUNCH Tue */}
                <div className='eventContainer' style={{gridColumn: 'tueStart', gridRow: 'PM130start / PM430start', backgroundColor: 'var(--greenEventO)'}}>
                {/* Side Bar */}
                <section className='rect' style={{backgroundColor: 'var(--greenEvent)'}} />
                {/* Event Info */}
                <div className='eventInfo'>
                    {/* Event Top Bar */}
                    <div className='eventTopBar'>
                    {/* Time */}
                    <div className='eventText'>
                        {/* Number */}
                        <div>01:30</div>
                        {/* AM/PM */}
                        <div>PM</div>
                    </div>
                    {/* Person Involved */}
                    <button className='userIcon calendarVariation' style={{backgroundColor: 'var(--blueIcon)'}}>
                        PO
                    </button>
                    </div>
                    {/* Event Name */}
                    <div className='eventName'>LUNCH</div>
                    {/* Event Location */}
                    Elder Dining Commons
                </div>
                </div>
                {/* Background Grid */}
                <div className='gridLine' style={{gridRow: 1, gridColumn: 1}} />
                <div className='gridLine' style={{gridRow: 1, gridColumn: 2}} />
                <div className='gridLine' style={{gridRow: 1, gridColumn: 3}} />
                <div className='gridLine' style={{gridRow: 1, gridColumn: 4}} />
                <div className='gridLine' style={{gridRow: 1, gridColumn: 5}} />
                <div className='gridLine' style={{gridRow: 1, gridColumn: 6}} />
                <div className='gridLine' style={{gridRow: 1, gridColumn: 7}} />
                <div className='gridLine' style={{gridRow: 2, gridColumn: 1}} />
                <div className='gridLine' style={{gridRow: 2, gridColumn: 2}} />
                <div className='gridLine' style={{gridRow: 2, gridColumn: 3}} />
                <div className='gridLine' style={{gridRow: 2, gridColumn: 4}} />
                <div className='gridLine' style={{gridRow: 2, gridColumn: 5}} />
                <div className='gridLine' style={{gridRow: 2, gridColumn: 6}} />
                <div className='gridLine' style={{gridRow: 2, gridColumn: 7}} />
                <div className='gridLine' style={{gridRow: 3, gridColumn: 1}} />
                <div className='gridLine' style={{gridRow: 3, gridColumn: 2}} />
                <div className='gridLine' style={{gridRow: 3, gridColumn: 3}} />
                <div className='gridLine' style={{gridRow: 3, gridColumn: 4}} />
                <div className='gridLine' style={{gridRow: 3, gridColumn: 5}} />
                <div className='gridLine' style={{gridRow: 3, gridColumn: 6}} />
                <div className='gridLine' style={{gridRow: 3, gridColumn: 7}} />
                <div className='gridLine' style={{gridRow: 4, gridColumn: 1}} />
                <div className='gridLine' style={{gridRow: 4, gridColumn: 2}} />
                <div className='gridLine' style={{gridRow: 4, gridColumn: 3}} />
                <div className='gridLine' style={{gridRow: 4, gridColumn: 4}} />
                <div className='gridLine' style={{gridRow: 4, gridColumn: 5}} />
                <div className='gridLine' style={{gridRow: 4, gridColumn: 6}} />
                <div className='gridLine' style={{gridRow: 4, gridColumn: 7}} />
                <div className='gridLine' style={{gridRow: 5, gridColumn: 1}} />
                <div className='gridLine' style={{gridRow: 5, gridColumn: 2}} />
                <div className='gridLine' style={{gridRow: 5, gridColumn: 3}} />
                <div className='gridLine' style={{gridRow: 5, gridColumn: 4}} />
                <div className='gridLine' style={{gridRow: 5, gridColumn: 5}} />
                <div className='gridLine' style={{gridRow: 5, gridColumn: 6}} />
                <div className='gridLine' style={{gridRow: 5, gridColumn: 7}} />
                <div className='gridLine' style={{gridRow: 6, gridColumn: 1}} />
                <div className='gridLine' style={{gridRow: 6, gridColumn: 2}} />
                <div className='gridLine' style={{gridRow: 6, gridColumn: 3}} />
                <div className='gridLine' style={{gridRow: 6, gridColumn: 4}} />
                <div className='gridLine' style={{gridRow: 6, gridColumn: 5}} />
                <div className='gridLine' style={{gridRow: 6, gridColumn: 6}} />
                <div className='gridLine' style={{gridRow: 6, gridColumn: 7}} />
                <div className='gridLine' style={{gridRow: 7, gridColumn: 1}} />
                <div className='gridLine' style={{gridRow: 7, gridColumn: 2}} />
                <div className='gridLine' style={{gridRow: 7, gridColumn: 3}} />
                <div className='gridLine' style={{gridRow: 7, gridColumn: 4}} />
                <div className='gridLine' style={{gridRow: 7, gridColumn: 5}} />
                <div className='gridLine' style={{gridRow: 7, gridColumn: 6}} />
                <div className='gridLine' style={{gridRow: 7, gridColumn: 7}} />
                <div className='gridLine' style={{gridRow: 8, gridColumn: 1}} />
                <div className='gridLine' style={{gridRow: 8, gridColumn: 2}} />
                <div className='gridLine' style={{gridRow: 8, gridColumn: 3}} />
                <div className='gridLine' style={{gridRow: 8, gridColumn: 4}} />
                <div className='gridLine' style={{gridRow: 8, gridColumn: 5}} />
                <div className='gridLine' style={{gridRow: 8, gridColumn: 6}} />
                <div className='gridLine' style={{gridRow: 8, gridColumn: 7}} />
                <div className='gridLine' style={{gridRow: 9, gridColumn: 1}} />
                <div className='gridLine' style={{gridRow: 9, gridColumn: 2}} />
                <div className='gridLine' style={{gridRow: 9, gridColumn: 3}} />
                <div className='gridLine' style={{gridRow: 9, gridColumn: 4}} />
                <div className='gridLine' style={{gridRow: 9, gridColumn: 5}} />
                <div className='gridLine' style={{gridRow: 9, gridColumn: 6}} />
                <div className='gridLine' style={{gridRow: 9, gridColumn: 7}} />
                <div className='gridLine' style={{gridRow: 10, gridColumn: 1}} />
                <div className='gridLine' style={{gridRow: 10, gridColumn: 2}} />
                <div className='gridLine' style={{gridRow: 10, gridColumn: 3}} />
                <div className='gridLine' style={{gridRow: 10, gridColumn: 4}} />
                <div className='gridLine' style={{gridRow: 10, gridColumn: 5}} />
                <div className='gridLine' style={{gridRow: 10, gridColumn: 6}} />
                <div className='gridLine' style={{gridRow: 10, gridColumn: 7}} />
                <div className='gridLine' style={{gridRow: 11, gridColumn: 1}} />
                <div className='gridLine' style={{gridRow: 11, gridColumn: 2}} />
                <div className='gridLine' style={{gridRow: 11, gridColumn: 3}} />
                <div className='gridLine' style={{gridRow: 11, gridColumn: 4}} />
                <div className='gridLine' style={{gridRow: 11, gridColumn: 5}} />
                <div className='gridLine' style={{gridRow: 11, gridColumn: 6}} />
                <div className='gridLine' style={{gridRow: 11, gridColumn: 7}} />
                <div className='gridLine' style={{gridRow: 12, gridColumn: 1}} />
                <div className='gridLine' style={{gridRow: 12, gridColumn: 2}} />
                <div className='gridLine' style={{gridRow: 12, gridColumn: 3}} />
                <div className='gridLine' style={{gridRow: 12, gridColumn: 4}} />
                <div className='gridLine' style={{gridRow: 12, gridColumn: 5}} />
                <div className='gridLine' style={{gridRow: 12, gridColumn: 6}} />
                <div className='gridLine' style={{gridRow: 12, gridColumn: 7}} />
                <div className='gridLine' style={{gridRow: 13, gridColumn: 1}} />
                <div className='gridLine' style={{gridRow: 13, gridColumn: 2}} />
                <div className='gridLine' style={{gridRow: 13, gridColumn: 3}} />
                <div className='gridLine' style={{gridRow: 13, gridColumn: 4}} />
                <div className='gridLine' style={{gridRow: 13, gridColumn: 5}} />
                <div className='gridLine' style={{gridRow: 13, gridColumn: 6}} />
                <div className='gridLine' style={{gridRow: 13, gridColumn: 7}} />
                <div className='gridLine' style={{gridRow: 14, gridColumn: 1}} />
                <div className='gridLine' style={{gridRow: 14, gridColumn: 2}} />
                <div className='gridLine' style={{gridRow: 14, gridColumn: 3}} />
                <div className='gridLine' style={{gridRow: 14, gridColumn: 4}} />
                <div className='gridLine' style={{gridRow: 14, gridColumn: 5}} />
                <div className='gridLine' style={{gridRow: 14, gridColumn: 6}} />
                <div className='gridLine' style={{gridRow: 14, gridColumn: 7}} />
                <div className='gridLine' style={{gridRow: 15, gridColumn: 1}} />
                <div className='gridLine' style={{gridRow: 15, gridColumn: 2}} />
                <div className='gridLine' style={{gridRow: 15, gridColumn: 3}} />
                <div className='gridLine' style={{gridRow: 15, gridColumn: 4}} />
                <div className='gridLine' style={{gridRow: 15, gridColumn: 5}} />
                <div className='gridLine' style={{gridRow: 15, gridColumn: 6}} />
                <div className='gridLine' style={{gridRow: 15, gridColumn: 7}} />
                <div className='gridLine' style={{gridRow: 16, gridColumn: 1}} />
                <div className='gridLine' style={{gridRow: 16, gridColumn: 2}} />
                <div className='gridLine' style={{gridRow: 16, gridColumn: 3}} />
                <div className='gridLine' style={{gridRow: 16, gridColumn: 4}} />
                <div className='gridLine' style={{gridRow: 16, gridColumn: 5}} />
                <div className='gridLine' style={{gridRow: 16, gridColumn: 6}} />
                <div className='gridLine' style={{gridRow: 16, gridColumn: 7}} />
                <div className='gridLine' style={{gridRow: 17, gridColumn: 1}} />
                <div className='gridLine' style={{gridRow: 17, gridColumn: 2}} />
                <div className='gridLine' style={{gridRow: 17, gridColumn: 3}} />
                <div className='gridLine' style={{gridRow: 17, gridColumn: 4}} />
                <div className='gridLine' style={{gridRow: 17, gridColumn: 5}} />
                <div className='gridLine' style={{gridRow: 17, gridColumn: 6}} />
                <div className='gridLine' style={{gridRow: 17, gridColumn: 7}} />
                <div className='gridLine' style={{gridRow: 18, gridColumn: 1}} />
                <div className='gridLine' style={{gridRow: 18, gridColumn: 2}} />
                <div className='gridLine' style={{gridRow: 18, gridColumn: 3}} />
                <div className='gridLine' style={{gridRow: 18, gridColumn: 4}} />
                <div className='gridLine' style={{gridRow: 18, gridColumn: 5}} />
                <div className='gridLine' style={{gridRow: 18, gridColumn: 6}} />
                <div className='gridLine' style={{gridRow: 18, gridColumn: 7}} />
                <div className='gridLine' style={{gridRow: 19, gridColumn: 1}} />
                <div className='gridLine' style={{gridRow: 19, gridColumn: 2}} />
                <div className='gridLine' style={{gridRow: 19, gridColumn: 3}} />
                <div className='gridLine' style={{gridRow: 19, gridColumn: 4}} />
                <div className='gridLine' style={{gridRow: 19, gridColumn: 5}} />
                <div className='gridLine' style={{gridRow: 19, gridColumn: 6}} />
                <div className='gridLine' style={{gridRow: 19, gridColumn: 7}} />
                <div className='gridLine' style={{gridRow: 20, gridColumn: 1}} />
                <div className='gridLine' style={{gridRow: 20, gridColumn: 2}} />
                <div className='gridLine' style={{gridRow: 20, gridColumn: 3}} />
                <div className='gridLine' style={{gridRow: 20, gridColumn: 4}} />
                <div className='gridLine' style={{gridRow: 20, gridColumn: 5}} />
                <div className='gridLine' style={{gridRow: 20, gridColumn: 6}} />
                <div className='gridLine' style={{gridRow: 20, gridColumn: 7}} />
                <div className='gridLine' style={{gridRow: 21, gridColumn: 1}} />
                <div className='gridLine' style={{gridRow: 21, gridColumn: 2}} />
                <div className='gridLine' style={{gridRow: 21, gridColumn: 3}} />
                <div className='gridLine' style={{gridRow: 21, gridColumn: 4}} />
                <div className='gridLine' style={{gridRow: 21, gridColumn: 5}} />
                <div className='gridLine' style={{gridRow: 21, gridColumn: 6}} />
                <div className='gridLine' style={{gridRow: 21, gridColumn: 7}} />
                <div className='gridLine' style={{gridRow: 22, gridColumn: 1}} />
                <div className='gridLine' style={{gridRow: 22, gridColumn: 2}} />
                <div className='gridLine' style={{gridRow: 22, gridColumn: 3}} />
                <div className='gridLine' style={{gridRow: 22, gridColumn: 4}} />
                <div className='gridLine' style={{gridRow: 22, gridColumn: 5}} />
                <div className='gridLine' style={{gridRow: 22, gridColumn: 6}} />
                <div className='gridLine' style={{gridRow: 22, gridColumn: 7}} />
                <div className='gridLine' style={{gridRow: 23, gridColumn: 1}} />
                <div className='gridLine' style={{gridRow: 23, gridColumn: 2}} />
                <div className='gridLine' style={{gridRow: 23, gridColumn: 3}} />
                <div className='gridLine' style={{gridRow: 23, gridColumn: 4}} />
                <div className='gridLine' style={{gridRow: 23, gridColumn: 5}} />
                <div className='gridLine' style={{gridRow: 23, gridColumn: 6}} />
                <div className='gridLine' style={{gridRow: 23, gridColumn: 7}} />
                <div className='gridLine' style={{gridRow: 24, gridColumn: 1}} />
                <div className='gridLine' style={{gridRow: 24, gridColumn: 2}} />
                <div className='gridLine' style={{gridRow: 24, gridColumn: 3}} />
                <div className='gridLine' style={{gridRow: 24, gridColumn: 4}} />
                <div className='gridLine' style={{gridRow: 24, gridColumn: 5}} />
                <div className='gridLine' style={{gridRow: 24, gridColumn: 6}} />
                <div className='gridLine' style={{gridRow: 24, gridColumn: 7}} />
                <div className='gridLine' style={{gridRow: 25, gridColumn: 1}} />
                <div className='gridLine' style={{gridRow: 25, gridColumn: 2}} />
                <div className='gridLine' style={{gridRow: 25, gridColumn: 3}} />
                <div className='gridLine' style={{gridRow: 25, gridColumn: 4}} />
                <div className='gridLine' style={{gridRow: 25, gridColumn: 5}} />
                <div className='gridLine' style={{gridRow: 25, gridColumn: 6}} />
                <div className='gridLine' style={{gridRow: 25, gridColumn: 7}} />
                <div className='gridLine' style={{gridRow: 26, gridColumn: 1}} />
                <div className='gridLine' style={{gridRow: 26, gridColumn: 2}} />
                <div className='gridLine' style={{gridRow: 26, gridColumn: 3}} />
                <div className='gridLine' style={{gridRow: 26, gridColumn: 4}} />
                <div className='gridLine' style={{gridRow: 26, gridColumn: 5}} />
                <div className='gridLine' style={{gridRow: 26, gridColumn: 6}} />
                <div className='gridLine' style={{gridRow: 26, gridColumn: 7}} />
                <div className='gridLine' style={{gridRow: 27, gridColumn: 1}} />
                <div className='gridLine' style={{gridRow: 27, gridColumn: 2}} />
                <div className='gridLine' style={{gridRow: 27, gridColumn: 3}} />
                <div className='gridLine' style={{gridRow: 27, gridColumn: 4}} />
                <div className='gridLine' style={{gridRow: 27, gridColumn: 5}} />
                <div className='gridLine' style={{gridRow: 27, gridColumn: 6}} />
                <div className='gridLine' style={{gridRow: 27, gridColumn: 7}} />
                <div className='gridLine' style={{gridRow: 28, gridColumn: 1}} />
                <div className='gridLine' style={{gridRow: 28, gridColumn: 2}} />
                <div className='gridLine' style={{gridRow: 28, gridColumn: 3}} />
                <div className='gridLine' style={{gridRow: 28, gridColumn: 4}} />
                <div className='gridLine' style={{gridRow: 28, gridColumn: 5}} />
                <div className='gridLine' style={{gridRow: 28, gridColumn: 6}} />
                <div className='gridLine' style={{gridRow: 28, gridColumn: 7}} />
                <div className='gridLine' style={{gridRow: 29, gridColumn: 1}} />
                <div className='gridLine' style={{gridRow: 29, gridColumn: 2}} />
                <div className='gridLine' style={{gridRow: 29, gridColumn: 3}} />
                <div className='gridLine' style={{gridRow: 29, gridColumn: 4}} />
                <div className='gridLine' style={{gridRow: 29, gridColumn: 5}} />
                <div className='gridLine' style={{gridRow: 29, gridColumn: 6}} />
                <div className='gridLine' style={{gridRow: 29, gridColumn: 7}} />
                <div className='gridLine' style={{gridRow: 30, gridColumn: 1}} />
                <div className='gridLine' style={{gridRow: 30, gridColumn: 2}} />
                <div className='gridLine' style={{gridRow: 30, gridColumn: 3}} />
                <div className='gridLine' style={{gridRow: 30, gridColumn: 4}} />
                <div className='gridLine' style={{gridRow: 30, gridColumn: 5}} />
                <div className='gridLine' style={{gridRow: 30, gridColumn: 6}} />
                <div className='gridLine' style={{gridRow: 30, gridColumn: 7}} />
            </section>
            </section>
        </section>
      </section>
      </div>
    </div>
  )
}

export default App;
