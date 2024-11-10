import React, { createContext, useState, useContext } from 'react';

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

const CalendarContext = createContext();

const CalendarContextProvider = ({ children }) => {
    const [startDate, setStartDate] = useState(new Date('2024-10-06T00:00:00'));
    const currentDates = getCalendarDates(startDate);

    return (
        <CalendarContext.Provider value={{ startDate, setStartDate, currentDates }}>
            { children }
        </CalendarContext.Provider>
    )
}

const useCalendarContext = () => {
    return useContext(CalendarContext);
}

export { CalendarContext, CalendarContextProvider, useCalendarContext };