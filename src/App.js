import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';

const getCSSVar = (variable) => {
  return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
}

function NavBar(props) {
  return (
    <nav className='nav'>
      {/* Top left */}
      <section className='navTopLeft'>
        <Link to='/' className='link logoButton'>
            <div className='logoCircle'></div>
            <h1>Meal and Mingle</h1>
        </Link>
      </section>
      {/* Top right */}
      <section className='navTopRight'>
        <Link to='/' className='link navButton'>
            <h1>Home</h1>
        </Link>
        <Link to='/messages' className='link navButton'>
            <h1>Messages</h1>
        </Link>
        <Link to='/profile' className='link navProfile'>
          <button className='navButton'><h1>{props.name}</h1></button>
          <button className='userIcon headerVariation'>{props.initials}</button>
        </Link>
      </section>
    </nav>
  )
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
  
  useEffect(() => {
    console.log(currentDates);
  }, [currentDates])
  
  return (
    <div className='calendarHeader'>
      {/* MONTH */}
      <h4>{currentDates[0].toLocaleString('default', {month: 'long'})}</h4>
      {/* Calendar Nav */}
      <nav className='calendarNav'>
        <BackButton startDate={startDate} setStartDate={(setStartDate)}/>
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
        <ForwardsButton startDate={startDate} setStartDate={setStartDate}/>
      </nav>
    </div>

    
  )
}
// display back button
const BackButton = ({startDate, setStartDate}) => {
  const handlePrevWeek = () => {
    const newStartDate = new Date(startDate);
    newStartDate.setDate(startDate.getDate() - 7);
    setStartDate(newStartDate);
  }

  return (
    <button className='calendarNavButton' onClick={handlePrevWeek}>
      <img src='https://cdn-icons-png.flaticon.com/128/2989/2989988.png' 
      alt='previous' 
      style={{width: 25, 
              height: 'auto', 
              transform: 'scaleX(-1)', 
              filter: 'invert(29%) sepia(46%) saturate(312%) hue-rotate(212deg) brightness(98%) contrast(89%)'}} />
    </button>
  )
}
// display forwards button
const ForwardsButton = ({startDate, setStartDate}) => {
  const handleNextWeek = () => {
    const newStartDate = new Date(startDate);
    newStartDate.setDate(startDate.getDate() + 7);
    setStartDate(newStartDate);
  }

  return (
    <button className='calendarNavButton' onClick={handleNextWeek}>
      <img src='https://cdn-icons-png.flaticon.com/128/2989/2989988.png' 
      alt='next' 
      style={{width: 25, 
              height: 'auto', 
              filter: 'invert(29%) sepia(46%) saturate(312%) hue-rotate(212deg) brightness(98%) contrast(89%)'}} />
    </button>
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

  const handleShow = (index) => {
    const newPosts = posts;
    newPosts[index].show = false;
    setPosts(newPosts.filter(item => item.show));
  }

  // when saved button is clicked
  useEffect(() => {
    POSTS.forEach((post, index) => {
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
    POSTS.forEach((post, index) => {
      if (post.show) {
        console.log('Post ' + index + ' is shown');
      }
      else {
        console.log('Post ' + index + " is not shown");
      }
    })
  },  [posts])

  return (
    <section className='postList'>
      {posts.map((post, index) => {
        return (
          <Post name={post.name} 
                initials={post.initials} 
                iconColor={post.iconColor} 
                location={post.location} 
                start={post.start} 
                end={post.end} 
                bookmarked={post.bookmarked} 
                show={post.show} 
                handleBookmark={() => handleBookmark(index)}
                handleShow={() => handleShow(index)}/>
        )
      })}
    </section>
  )
}
// defines how a post is displayed
function Post(props) {
  const day = props.start.toLocaleString('default', {weekday: 'short'});
  const month = ((props.start.getMonth()) + 1).toString().padStart(2, '0');
  const date = props.start.getDate().toString().padStart(2, '0');
  const startTime = props.start.toLocaleString('default', {hour: '2-digit', minute: '2-digit'});
  const endTime = props.end.toLocaleString('default', {hour: '2-digit', minute: '2-digit'});

  return (
    <div className='post'>
      <button className='userIcon' style={{backgroundColor: props.iconColor}}>{props.initials}</button>
      {/* Right side of post */}
      <div className='colContainer'>
        <XButton handleShow={props.handleShow}/>
        {/* Top section of right side */}
        <div className='postTextBlock'>
          {/* Name */}
          <div className='postText'>{props.name}</div>
          {/* Location(s) */}
          <div className='postText locationText'>{props.location}</div>
          {/* Separator line */}
          <div className='postLine' />
          {/* Date and Time */}
          <div className='postDateTime'>
            {/* Date */}
            <div className='postText'>{`${day} ${month}/${date}`}</div>
            {/* Time */}
            <div className='postText'>{`${startTime} - ${endTime}`}</div>
          </div>
        </div>
        {/* Send and Save buttons */}
        <div className='sendSaveContainer'>
          <SendButton/>
          {/* Save button */}
          <SaveButton bookmarked={props.bookmarked}
                      handleBookmark={props.handleBookmark}/>
        </div>
      </div>
    </div>
  )
}
// stores information for all posts
const POSTS = [
  {
    name: 'John Doe',
    initials: 'JD',
    iconColor: getCSSVar('--pinkIcon'),
    location: 'Foster Walker Plex East',
    start: new Date('2024-10-17T16:00'),
    end: new Date('2024-10-17T18:00'),
    bookmarked: true,
    show: true
  },
  {
    name: 'Some Person',
    initials: 'SP',
    iconColor: getCSSVar('--yellowIcon'),
    location: 'Allison Dining Commons/ Sargent Dining Commons',
    start: new Date('2024-10-14T20:00'),
    end: new Date('2024-10-14T21:30'),
    bookmarked: false,
    show: true
  }
]


// displays timestamps for calendar side display
const Times = () => {
  return (
    <section className='timeMarkings'>
      {TIMES.map(time => (
        <h5 className='timeStyle' key={time}>{time}</h5>
      ))}
    </section>
  )
}
// stores all timestamps for calendar side display
const TIMES = [
  '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', 
  '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', 
  '7 PM', '8 PM', '9 PM'
]

// the following 2 functions determines grid placement for a time
const getGridCol = (date) => {
  switch (date.getDay()) {
    case 0:
      return 'sunStart';
    case 1:
      return 'monStart';
    case 2:
      return 'tueStart';
    case 3:
      return 'wedStart';
    case 4:
      return 'thuStart';
    case 5:
      return 'friStart';
    case 6:
      return 'satStart';
    default:
      return;
  }
}
const getGridRow = (date) => {
  switch (date.toLocaleString('default', {hour: '2-digit', minute: '2-digit'})) {
    case '07:00 AM':
      return 'AM7start';
    case '07:30 AM':
      return 'AM730start';
    case '08:00 AM':
      return 'AM8start';
    case '08:30 AM':
      return 'AM830start';
    case '09:00 AM':
      return 'AM9start';
    case '09:30 AM':
      return 'AM930start';
    case '10:00 AM':
      return 'AM10start';
    case '10:30 AM':
      return 'AM1030start';
    case '11:00 AM':
      return 'AM11start';
    case '11:30 AM':
      return 'AM1130start';
    case '12:00 PM':
      return 'PM12start';
    case '12:30 PM':
      return 'PM1230start';
    case '01:00 PM':
      return 'PM1start';
    case '01:30 PM':
      return 'PM130start';
    case '02:00 PM':
      return 'PM2start';
    case '02:30 PM':
      return 'PM230start';
    case '03:00 PM':
      return 'PM3start';
    case '03:30 PM':
      return 'PM330start';
    case '04:00 PM':
      return 'PM4start';
    case '04:30 PM':
      return 'PM430start';
    case '05:00 PM':
      return 'PM5start';
    case '05:30 PM':
      return 'PM530start';
    case '06:00 PM':
      return 'PM6start';
    case '06:30 PM':
      return 'PM630start';
    case '07:00 PM':
      return 'PM7start';
    case '07:30 PM':
      return 'PM730start';
    case '08:00 PM':
      return 'PM8start';
    case '08:30 PM':
      return 'PM830start';
    case '09:00 PM':
      return 'PM9start';
    case '09:30 PM':
      return 'PM930start';
    case '10:00 PM':
      return 'PM10start';
    default:
      return;
  }
}

// contains the displayed list of events
const CalendarEvents = () => {
  const gridLines = [];

  // Background Grid
  for (let row = 1; row <= getCSSVar('--gridRowCount'); row++) {
    for (let col = 1; col <= getCSSVar('--gridColCount'); col++) {
      gridLines.push(
        <div className='gridLine' key={`${row}-${col}`} style={{gridRow: row, gridColumn: col}} div/>
      )
    }
  }

  return (
    <section className='calendarGrid'>
      {EVENTS.map((event) => {
          return (
            <Event name={event.name} 
                  start={event.start} 
                  end={event.end} 
                  location={event.location} 
                  sideColor={event.sideColor} 
                  bgColor={event.bgColor}
                  otherParty={event.otherParty}
                  initials1={event.initials1}
                  iconColor1={event.iconColor1}
            />
          )
        })}
      {gridLines}
    </section>
  )
}
// defines how an event is displayed
function Event(props) {
  const startTime = props.start.toLocaleString('default', {hour: '2-digit', minute: '2-digit'});

  return (
    <div className='eventContainer' style={{gridColumn: getGridCol(props.start), 
                                                        gridRow: `${getGridRow(props.start)} / ${getGridRow(props.end)}`, 
                                                        backgroundColor: props.bgColor}}>
      {/* Side Bar */}
      <div className='rect' style={{backgroundColor: props.sideColor}} />
      {/* Event Info */}
      <div className='eventInfo'>
        {/* Event Top Bar */}
        <div className='eventTopBar'>
          {/* Time */}
          <div className='eventTime'>{startTime}</div>
          {/* Person Involved (if applicable) */}
          {props.otherParty && 
            <button className='userIcon calendarVariation' style={{backgroundColor: props.iconColor1}}>
              {props.initials1}
            </button>} 
        </div>
        {/* Event Name */}
        <div className='eventName'>{props.name}</div>
        {/* Event Location */}
        {props.location}
      </div>
    </div>
  )
}
// stores information for all events
const EVENTS = [
  {
    name: 'Class A',
    start: new Date('2024-10-07T10:00'),
    end: new Date('2024-10-07T13:00'),
    location: 'Somewhere',
    sideColor: getCSSVar('--purpleEvent'),
    bgColor: getCSSVar('--purpleEventBg'),
    otherParty: false
  },
  {
    name: 'Class A',
    start: new Date('2024-10-09T10:00'),
    end: new Date('2024-10-09T13:00'),
    location: 'Somewhere',
    sideColor: getCSSVar('--purpleEvent'),
    bgColor: getCSSVar('--purpleEventBg'),
    otherParty: false
  },
  {
    name: 'Class A',
    start: new Date('2024-10-11T10:00'),
    end: new Date('2024-10-11T13:00'),
    location: 'Somewhere',
    sideColor: getCSSVar('--purpleEvent'),
    bgColor: getCSSVar('--purpleEventBg'),
    otherParty: false
  },
  {
    name: 'Class B',
    start: new Date('2024-10-08T09:00'),
    end: new Date('2024-10-08T11:00'),
    location: 'Someplace',
    sideColor: getCSSVar('--blueEvent'),
    bgColor: getCSSVar('--blueEventBg'),
    otherParty: false
  },
  {
    name: 'Class B',
    start: new Date('2024-10-10T09:00'),
    end: new Date('2024-10-10T11:00'),
    location: 'Someplace',
    sideColor: getCSSVar('--blueEvent'),
    bgColor: getCSSVar('--blueEventBg'),
    otherParty: false
  },
  {
    name: 'Lunch',
    start: new Date('2024-10-08T13:30'),
    end: new Date('2024-10-08T16:30'),
    location: 'Elder Dining Commons',
    sideColor: getCSSVar('--greenEvent'),
    bgColor: getCSSVar('--greenEventBg'),
    otherParty: true,
      initials1: 'PO',
      iconColor1: getCSSVar('--blueIcon')
  }
]

// display filter button
const Filter = () => {
  return (
    <button className='filterButton'>
      <img src='https://cdn-icons-png.flaticon.com/128/7693/7693332.png' alt='filter' style={{width: 15, height: 'auto', filter: 'invert(1)'}} />
    </button>
  )
}
// display create button
const CreateButton = () => {
  return (
    <button className='createButton'>
      <img src='https://cdn-icons-png.flaticon.com/128/992/992651.png' alt='add' style={{width: 33, height: 'auto', filter: 'invert(1)'}} />
      Create
    </button>
  )
}
// display x button
const XButton = ({handleShow}) => {
  return (
    <div className='xButtonContainer'>
      {/* 'x' button */}
      <button className='crossButton' onClick={handleShow}>
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
  )
}
// display send button
const SendButton = () => {
  return (
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
  )
}
// display save button
function SaveButton({bookmarked, handleBookmark}) {
  const bookmarkImg = bookmarked ? 'https://cdn-icons-png.flaticon.com/128/102/102279.png' : 'https://cdn-icons-png.flaticon.com/128/5662/5662990.png'; 
  
  return (
    <button className='sendSaveButtons' onClick={handleBookmark}>
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
  )
}

// displays home page
const Home = () => {
  return(
    <section className='body'>
      <section className='leftFrame'>
        <div className='subHeader'>
          <h2>Posts</h2>
          <Filter/>
          </div>
          <PostList/>
          <CreateButton/>
      </section>
      <section className='rightFrame'>
        <CalendarHead/>
          <section className='calendarBodyContainer'>
            <Times/>
            <CalendarEvents/>
          </section>
      </section> 
    </section>
  )
}

function App() {
  return (
    <Router>
      <div className='App'>
        <div>
          <meta charSet='UTF-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
          <title>INDEX</title>
          <link rel='stylesheet' href='App.css' />

          <NavBar name='First Last' initials='FL'/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/messages' element={<div>Messages Page (coming soon)</div>}/>
            <Route path='/profile' element={<div>Profile Page (coming soon)</div>}/>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;
