import { useContext } from "react";
import UserIcon from "/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/common/buttons/UserIcon.js";
import { CalendarContext } from "/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/home/CalendarContext.js";

// determine grid placement for a time
const getGridCol = (date) => {
  return date.getDay() + 1;
}
const getGridRow = (date) => {
  return (date.getHours() - 7) * 2 + 1 * date.getMinutes() / 30 + 1;
}
const EventContainer = (props) => {
  const startCol = getGridCol(props.start);
  const startRow = getGridRow(props.start);
  const endRow = getGridRow(props.end);

  return (
    <div className='eventContainer'
      style={{
        gridColumn: startCol,
        gridRow: `${startRow} / ${endRow}`,
        backgroundColor: props.bgColor
      }}>
      {props.children}
    </div>
  )
}
const SideBar = (props) => {
  return (
    <div className='rect'
      style={{ backgroundColor: props.sideColor }}>
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
      {props.otherUser &&
        <UserIcon user={props.otherUser} />
      }
    </div>
  )
}
// defines how an event is displayed
function Event(props) {
  const startTime = props.start.toLocaleString('default', { hour: '2-digit', minute: '2-digit' });
  const { currentDates } = useContext(CalendarContext);

  // props.start but with time set to 00:00:00
  const startDay = new Date(props.start.getFullYear(), props.start.getMonth(), props.start.getDate());
  const isSameDay = currentDates.some(date => date.getTime() === startDay.getTime());

  return (
    (isSameDay &&
      <EventContainer start={props.start} end={props.end} bgColor={props.bgColor}>
        <SideBar sideColor={props.sideColor} />
        <EventInfo>
          <StartTime startTime={startTime} />
          <EventName title={props.title} />
          <EventLocation location={props.location} />
          <OtherParty otherUser={props.otherUser} />
        </EventInfo>
      </EventContainer>
    )
  )
}

export default Event;