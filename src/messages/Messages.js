import '../App.css';
import './Messages.css';
import User from '../common/users/User.js';
import Button from '/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/common/Button.js';
import PostList from '../common/posts/PostList.js';
import ContactsList from './ContactsList.js';


const MessagesBody = (props) => {
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

const MessageBody = (props) => {
  return (
    <section className='calendarBodyContainer'>{props.children}</section>
  )
}

const Messages = () => {
  return (
    <MessagesBody>
      <LeftFrame>
        <Button.Filter />
        <PostList header='Saved' Posts={User.saved} />
        <ContactsList header='Messages' Contacts={User.contacts} />
        <Button.Create />
      </LeftFrame>
      <RightFrame>
        <MessageBody />
      </RightFrame>
    </MessagesBody>
  )
}

export default Messages;