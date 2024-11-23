import React, { useContext } from 'react';
import useCalendarNav from '/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/home/useCalendarNav.js';
import { CalendarContext } from '/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/home/CalendarContext.js';

const CalendarHead = (props) => {
  return (
    <div className='calendarHead'>{props.children}</div>
  )
}
const Month = (props) => {
  return (
    <h4>{props.currentDates[0].toLocaleString('default', { month: 'long' })}</h4>
  )
}
const CalendarNav = (props) => {
  return (
    <nav>{props.children}</nav>
  )
}
const BackButton = () => {
  const { handleWeek } = useCalendarNav(false);

  return (
    <button className='calendarNavButton' onClick={handleWeek}>
      <img src='https://cdn-icons-png.flaticon.com/128/2989/2989988.png'
        alt='previous'
        style={{
          width: 25,
          height: 'auto',
          transform: 'scaleX(-1)',
          filter: 'invert(29%) sepia(46%) saturate(312%) hue-rotate(212deg) brightness(98%) contrast(89%)'
        }} />
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
        <div key={index}>
          <h5>{date.toLocaleString('default', { weekday: 'short' })}</h5>
        </div>
      ))}
    </div>
  )
}
const WeekDates = (props) => {
  return (
    <div>
      {props.currentDates.map((date, index) => (
        <div key={index}>
          <h5 className='dateStyle'>{date.getDate().toString().padStart(2, '0')}</h5>
        </div>
      ))}
    </div>
  )
}
const ForwardsButton = () => {
  const { handleWeek } = useCalendarNav(true);

  return (
    <button className='calendarNavButton' onClick={handleWeek}>
      <img src='https://cdn-icons-png.flaticon.com/128/2989/2989988.png'
        alt='next'
        style={{
          width: 25,
          height: 'auto',
          filter: 'invert(29%) sepia(46%) saturate(312%) hue-rotate(212deg) brightness(98%) contrast(89%)'
        }} />
    </button>
  )
}
// displays calendar header
const CalendarHeader = () => {
  const { currentDates } = useContext(CalendarContext);


  return (
    <CalendarHead>
      <Month currentDates={currentDates} />
      <CalendarNav>
        <BackButton />
        <WeekLabel>
          <WeekDays currentDates={currentDates} />
          <WeekDates currentDates={currentDates} />
        </WeekLabel>
        <ForwardsButton />
      </CalendarNav>
    </CalendarHead>
  )
}

export default CalendarHeader;
