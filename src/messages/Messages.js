import '../App.css';
import './Messages.css';
import Filter from '../common/Filter.js';
import User from '../common/users/User.js';
import CreateButton from '../common/buttons/CreateButton.js';
import PostList from '../common/posts/PostList.js';
import Card from '../common/card/Card.js';


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
            {/*placeholder until Contacts List is ready to be used*/}
            {/* <div style={{zIndex: 2, position: 'fixed', top: '190px', left: '32px' }}>
                <Card type='simple' user={User} hasX={false} topText={' '} mainText={User.name} hasLine={false} bottomText='hihi - 2h'/>
            </div> */}
            <CreateButton/>
          </LeftFrame>
          <RightFrame>
            <MessageBody/>
          </RightFrame>
        </MessagesBody>
    )
}

export default Messages;