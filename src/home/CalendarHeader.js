import { useState, useEffect } from 'react';

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

  export default CalendarHeader;