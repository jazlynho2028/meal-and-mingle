// stores information for all events
const AllEvents = [];

const createEvent = (id, user, title, start, end, location, sideColor, bgColor, initials1, iconColor1) => {
  const event = {
    id: id,
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

export default AllEvents;
export { createEvent };