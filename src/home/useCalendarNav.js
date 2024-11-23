import { useEffect } from "react";
import { useCalendarContext } from "./CalendarContext";

const useCalendarNav = (isForwards) => {
    const { startDate, setStartDate } = useCalendarContext();

    const handleWeek = () => {
        const newStartDate = new Date(startDate);
        newStartDate.setDate(
            isForwards ? startDate.getDate() + 7 :
                startDate.getDate() - 7);

        setStartDate(newStartDate);
    }

    useEffect(() => {
        console.log('New start date: ', startDate);
    }, [startDate])

    return { handleWeek };
}

export default useCalendarNav;
