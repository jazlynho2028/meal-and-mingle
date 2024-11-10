import '../App.css';
import './Home.css';
import getCSSVar from '../common/getCSSVar.js';
import Filter from '../common/Filter.js';
import User from '../common/users/User.js';
import CreateButton from '../common/buttons/CreateButton.js';
import PostList from '../common/posts/PostList.js';
import AllUsers from '../common/users/AllUsers.js';
import { createPost } from '../common/posts/AllPosts.js';
import CalendarHeader from './CalendarHeader.js';
import Event from './Event.js';
import AllEvents, { createEvent } from './AllEvents.js';
import getAllUsers from '../common/users/getAllUsers.js';

// placeholders before create button functions are implemented (move into a useEffect later)
getAllUsers();

createPost('p1', AllUsers[0], 'Sargent Dining Commons', new Date('2024-09-25T12:30'), new Date('2024-09-25T13:00'));
createPost('p2', AllUsers[1], 'Foster Walker Plex East', new Date('2024-10-17T16:00'), new Date('2024-10-17T18:00'));
createPost('p3', AllUsers[2], 'Allison Dining Commons/ Sargent Dining Commons', new Date('2024-10-14T20:00'), new Date('2024-10-14T21:30'));

createEvent('e1', User, 'Class A', new Date('2024-10-07T10:00'), new Date('2024-10-07T13:00'), 'Somewhere', getCSSVar('--purpleEvent'), getCSSVar('--purpleEventBg'));
createEvent('e2', User, 'Class A', new Date('2024-10-09T10:00'), new Date('2024-10-09T13:00'), 'Somewhere', getCSSVar('--purpleEvent'), getCSSVar('--purpleEventBg'));
createEvent('e3', User, 'Class A', new Date('2024-10-11T10:00'), new Date('2024-10-11T13:00'), 'Somewhere', getCSSVar('--purpleEvent'), getCSSVar('--purpleEventBg'));
createEvent('e4', User, 'Class B', new Date('2024-10-08T09:00'), new Date('2024-10-08T11:00'), 'Someplace', getCSSVar('--blueEvent'), getCSSVar('--blueEventBg'));
createEvent('e5', User, 'Class B', new Date('2024-10-10T09:00'), new Date('2024-10-10T11:00'), 'Someplace', getCSSVar('--blueEvent'), getCSSVar('--blueEventBg'));
createEvent('e6', User, 'Lunch', new Date('2024-10-08T13:30'), new Date('2024-10-08T16:30'), 'Elder Dining Commons', getCSSVar('--greenEvent'), getCSSVar('--greenEventBg'), AllUsers[3]);

const HomeBody = (props) => {
  return (
    <section className='rowBody'>{props.children}</section>
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
      {AllEvents.map(event => {
          return (
            <Event key={event.id}
                    title={event.title} 
                    start={event.start} 
                    end={event.end} 
                    location={event.location} 
                    sideColor={event.sideColor} 
                    bgColor={event.bgColor}
                    otherUser={event.otherUser}
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