import getCSSVar from "/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/common/getCSSVar.js";
import CalendarHeader from '/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/home/calendar/CalendarHeader.js';
import Event from '/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/home/Event.js';
import AllEvents from '/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/home/AllEvents.js';
import { CalendarContextProvider } from '/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/home/calendar/CalendarContext.js';


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
                    style={{ gridRow: row, gridColumn: col }}
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

const Calendar = () => {
    return (
        <CalendarContextProvider>
            <CalendarHeader />
            <CalendarBody>
                <Times />
                <CalendarEvents />
            </CalendarBody>
        </CalendarContextProvider>
    )
}

export default Calendar;