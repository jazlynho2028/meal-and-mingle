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

// determine grid placement for a time
const getGridCol = (date) => {
  return date.getDay()+1;
}
const getGridRow = (date) => {
  return (date.getHours()-7)*2 + 1*date.getMinutes()/30 + 1;
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