// stores information for all events
const AllEvents = [];

const createEvent = (id, user, title, start, end, location, sideColor, bgColor, otherUser) => {
  const event = {
    id: id,
    user: user,
    title: title,
    start: start,
    end: end,
    location: location,
    sideColor: sideColor,
    bgColor: bgColor,
    otherUser: otherUser
  }
  user.events.push(event);
  AllEvents.push(event);
}

export default AllEvents;
export { createEvent };