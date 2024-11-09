import { useState, useEffect } from 'react';
import './App.css';
import './Home.css';
import { getCSSVar, UserIcon, AllUsers, User, Filter, CreateButton, PostList } from './variables.js';

const CalendarHead = (props) => {
  return (
    <div className='calendarHead'>{props.children}</div>
  )
}
const Month = (props) => {
  return (
    <h4>{props.currentDates[0].toLocaleString('default', {month: 'long'})}</h4>
  )
}
const CalendarNav = (props) => {
  return (
    <nav>{props.children}</nav>
  )
}
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
const WeekLabel = (props) => {
  return (
    <div className='weekLabel'>{props.children}</div>
  )
}
const WeekDays = (props) => {
  return (
    <div>
      {props.currentDates.map((date, index) => (
        <div key={index}><h5>{date.toLocaleString('default', {weekday: 'short'})}</h5></div>    
      ))}
    </div>
  )
}
const WeekDates = (props) => {
  return (
    <div>
      {props.currentDates.map((date, index) => (
        <div key={index}><h5 className='dateStyle'>{date.getDate().toString().padStart(2, '0')}</h5></div>    
      ))}
    </div>
  )
}
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
// displays calendar header
const CalendarHeader = () => {
  const [startDate, setStartDate] = useState(new Date('2024-10-06T00:00:00'));

  // gets the 7 dates of current week
  const getCalendarDates = (startDate) => {
    const dates = [];
    const currentDate = new Date(startDate);
    for (let i = 0; i < 7; i++) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  }

  const currentDates = getCalendarDates(startDate);
  
  useEffect(() => {
    console.log(currentDates);
  }, [currentDates])
  
  return (
    <CalendarHead>
      <Month currentDates={currentDates}/>
      <CalendarNav>
        <BackButton startDate={startDate} setStartDate={(setStartDate)}/>
        <WeekLabel>
          <WeekDays currentDates={currentDates}/>
          <WeekDates currentDates={currentDates}/>
        </WeekLabel>
        <ForwardsButton startDate={startDate} setStartDate={setStartDate}/>
      </CalendarNav>
    </CalendarHead>
  )
}

// determine grid placement for a time
const getGridCol = (date) => {
  return date.getDay()+1;
}
const getGridRow = (date) => {
  return (date.getHours()-7)*2 + 1*date.getMinutes()/30 + 1;
}
const EventContainer = (props) => {
  const startCol = getGridCol(props.start);
  const startRow = getGridRow(props.start);
  const endRow = getGridRow(props.end);
  
  return (
    <div className='eventContainer' 
          style={{gridColumn: startCol, 
                  gridRow: `${startRow} / ${endRow}`, 
                  backgroundColor: props.bgColor}}>
      {props.children}
    </div>
  )
}
const SideBar = (props) => {
  return (
    <div className='rect' 
          style={{backgroundColor: props.sideColor}}>
    </div>
  )
}
const EventInfo = (props) => {
  return (
    <div className='eventInfo'>{props.children}</div>
  )
}
const StartTime = (props) => {
  return (
    <div>{props.startTime}</div>
  )
}
const EventName = (props) => {
  return (
    <p className='eventName'>{props.title}</p>
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
      {props.iconColor1 && 
        <UserIcon iconColor={props.iconColor1}
                   initials={props.initials1}
        />
      }
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
        <EventName title={props.title}/>
        <EventLocation location={props.location}/>
        <OtherParty iconColor1={props.iconColor1} initials1={props.initials1}/>
      </EventInfo>
    </EventContainer>
  )
}

// stores information for all events
const AllEvents = [];

const createEvent = (user, title, start, end, location, sideColor, bgColor, initials1, iconColor1) => {
  const event = {
    title: title,
    start: start,
    end: end,
    location: location,
    sideColor: sideColor,
    bgColor: bgColor,
    initials1: initials1,
    iconColor1: iconColor1
  }
  user.events.push(event);
  AllEvents.push(event);
}

createEvent(User, 'Class A', new Date('2024-10-07T10:00'), new Date('2024-10-07T13:00'), 'Somewhere', getCSSVar('--purpleEvent'), getCSSVar('--purpleEventBg'));
createEvent(User, 'Class A', new Date('2024-10-09T10:00'), new Date('2024-10-09T13:00'), 'Somewhere', getCSSVar('--purpleEvent'), getCSSVar('--purpleEventBg'));
createEvent(User, 'Class A', new Date('2024-10-11T10:00'), new Date('2024-10-11T13:00'), 'Somewhere', getCSSVar('--purpleEvent'), getCSSVar('--purpleEventBg'));
createEvent(User, 'Class B', new Date('2024-10-08T09:00'), new Date('2024-10-08T11:00'), 'Someplace', getCSSVar('--blueEvent'), getCSSVar('--blueEventBg'));
createEvent(User, 'Class B', new Date('2024-10-10T09:00'), new Date('2024-10-10T11:00'), 'Someplace', getCSSVar('--blueEvent'), getCSSVar('--blueEventBg'));
createEvent(User, 'Lunch', new Date('2024-10-08T13:30'), new Date('2024-10-08T16:30'), 'Elder Dining Commons', getCSSVar('--greenEvent'), getCSSVar('--greenEventBg'),'PO', getCSSVar('--blueIcon'));


const HomeBody = (props) => {
  return (
    <section className='homeBody'>{props.children}</section>
  )
}
const LeftFrame = (props) => {
  return (
    <section className='leftFrame'>{props.children}</section>
  )
}
const RightFrame = (props) => {
  return (
    <section className='rightFrame'>{props.children}</section>
  )
}
const CalendarBody = (props) => {
  return (
    <section className='calendarBodyContainer'>{props.children}</section>
  )
}
// displays timestamps for calendar side display
const Times = () => {
  const AllTimes = [
    '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', 
    '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', 
    '7 PM', '8 PM', '9 PM'
  ]

  return (
    <section className='timeMarkings'>
      {AllTimes.map(time => (
        <h5 key={time}>{time}</h5>
      ))}
    </section>
  )
}
// contains the displayed list of events
const CalendarEvents = () => {
  const gridLines = [];

  // Background Grid
  for (let row = 1; row <= getCSSVar('--gridRowCount'); row++) {
    for (let col = 1; col <= getCSSVar('--gridColCount'); col++) {
      gridLines.push(
        <div className='gridLine' 
              key={`${row}-${col}`} 
              style={{gridRow: row, gridColumn: col}}
        />
      )
    }
  }

  return (
    <section className='calendarGrid'>
      {AllEvents.map((event) => {
          return (
            <Event title={event.title} 
                    start={event.start} 
                    end={event.end} 
                    location={event.location} 
                    sideColor={event.sideColor} 
                    bgColor={event.bgColor}
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
    <HomeBody>
      <LeftFrame>
        <Filter/>
        <PostList header='Posts' Posts={User.display} isProfileList={false} isUserSavedList={false}/>
        <CreateButton/>
      </LeftFrame>
      <RightFrame>
        <CalendarHeader/>
        <CalendarBody>
          <Times/>
          <CalendarEvents/>
        </CalendarBody>
      </RightFrame>
    </HomeBody>
  )
}

export default Home;