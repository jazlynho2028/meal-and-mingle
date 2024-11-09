import '../App.css';
import './Messages.css';
import getCSSVar from '../common/getCSSVar.js';
import Filter from '../common/Filter.js';
import User from '../common/users/User.js';
import CreateButton from '../common/buttons/CreateButton.js';
import PostList from '../common/posts/PostList.js';



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
    return(
        <MessagesBody>
          <LeftFrame>
            <Filter/>
            <PostList header='Saved' Posts={User.saved} isProfileList={true} isUserSavedList={true}/>
            <PostList header='Messages' Posts={User.saved} isProfileList={true} isUserSavedList={true}/>
            <CreateButton/>
          </LeftFrame>
          <RightFrame>
            <MessageBody/>
          </RightFrame>
        </MessagesBody>
    )
}

export default Messages;