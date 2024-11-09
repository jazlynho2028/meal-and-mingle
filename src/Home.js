import { useState, useEffect } from 'react';
import './App.css';
import './Home.css';
import { getCSSVar, UserIcon, POSTS, Filter, CreateButton, PostList } from './variables.js';


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
      <nav>
        <BackButton startDate={startDate} setStartDate={(setStartDate)}/>
        {/* Week Label */}
        <div className='weekLabel'>
            {/* Days of the Week */}
            <div>
              {currentDates.map((date, index) => (
                <div key={index}><h5>{date.toLocaleString('default', {weekday: 'short'})}</h5></div>    
              ))}
            </div>
            {/* Dates of the Week */}
            <div>
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

// displays timestamps for calendar side display
const Times = () => {
  return (
    <section className='timeMarkings'>
      {TIMES.map(time => (
        <h5 key={time}>{time}</h5>
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

const EventContainer = (props) => {
  return (
    <div className='eventContainer' style={{gridColumn: getGridCol(props.start), 
      gridRow: `${getGridRow(props.start)} / ${getGridRow(props.end)}`, 
      backgroundColor: props.bgColor}}>
      {props.children}
    </div>
  )
}

const SideBar = (props) => {
  return (
    <div className='rect' style={{backgroundColor: props.sideColor}}></div>
  )
}
const EventInfo = (props) => {
  return (
    <div className='eventInfo'>
        {props.children}
    </div>
  )
}
const StartTime = (props) => {
  return (
    <div>{props.startTime}</div>
  )
}
const EventName = (props) => {
  return (
    <p className='eventName'>{props.name}</p>
  )
}
const EventLocation = (props) => {
  return (
    <div>{props.location}</div>
  )
}
const OtherParty = (props) => {
  return (
    <div>
      {props.otherParty && 
      <UserIcon iconColor={props.iconColor1} initials={props.initials1}/>}
    </div>
  )
}

// defines how an event is displayed
function Event(props) {
  const startTime = props.start.toLocaleString('default', {hour: '2-digit', minute: '2-digit'});

  return (
    <EventContainer start={props.start} end={props.end} bgColor={props.bgColor}>
      <SideBar sideColor={props.sideColor}/>
      <EventInfo>
        <StartTime startTime={startTime}/>
        <EventName name={props.name}/>
        <EventLocation location={props.location}/>
        <OtherParty otherParty={props.otherParty} iconColor1={props.iconColor1} initials1={props.initials1}/>
      </EventInfo>
    </EventContainer>
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

// displays calendar grid lines
const gridLines = [];

// Background Grid
for (let row = 1; row <= getCSSVar('--gridRowCount'); row++) {
  for (let col = 1; col <= getCSSVar('--gridColCount'); col++) {
    gridLines.push(
      <div className='gridLine' key={`${row}-${col}`} style={{gridRow: row, gridColumn: col}} div/>
    )
  }
}

// contains the displayed list of events
const CalendarEvents = () => {
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





// displays home page
function Home() {
  return(
    <section className='homeBody'>
      <section className='leftFrame'>
          <Filter/>
          <PostList header='Posts' Posts={POSTS} profileList={false} userSavedList={false}/>
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

export default Home;
export { Filter, CreateButton, POSTS, PostList };