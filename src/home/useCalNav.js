import { useState, useEffect } from "react";

const useCalendarNav = ( isForwards, startDate, setStartDate ) => {
    const handleWeek = () => {
    const newStartDate = new Date(startDate);
    newStartDate.setDate( 
        isForwards ? startDate.getDate() + 7 : 
                 startDate.getDate() - 7);
    setStartDate(newStartDate);
    }

    return handleWeek;
}

export default useCalendarNav;
