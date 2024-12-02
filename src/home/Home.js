import React from 'react';
import '/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/App.css';
import '/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/home/Home.css';
import getCSSVar from '/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/common/getCSSVar.js';
import User from '/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/common/users/User.js';
import Button from '/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/common/Button.js';
import PostList from '/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/common/posts/PostList.js';
import AllUsers from '/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/common/users/AllUsers.js';
import { createPost } from '/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/common/posts/AllPosts.js';
import createContact from '/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/common/contacts/createContact.js';
import { createEvent } from '/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/home/AllEvents.js';
import Calendar from '/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/home/calendar/Calendar.js';

// placeholders 
createContact(AllUsers[1], 'hihi - 2h');
createContact(AllUsers[2], 'I\'m hungry - 1d');

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

// displays home page
function Home() {
  return (
    <HomeBody>
      <LeftFrame>
        <Button.Filter />
        <PostList header='Posts' Posts={User.display} />
        <Button.Create />
      </LeftFrame>
      <RightFrame>
        <Calendar />
      </RightFrame>
    </HomeBody>
  )
}

export default Home;