import XButton from "../buttons/XButton";
import UserIcon from "../buttons/UserIcon";
import SendButton from "../buttons/SendButton";
import SaveButton from "../buttons/SaveButton";
import './Post.css';

const APost = (props) => {
    return (
      ((!props.isUserSavedList && props.isProfileList) || (props.isUserSavedList && props.bookmarked) || (!props.isProfileList && props.show)) &&
      <div className='post'>{props.children}</div>
    )
  }
  const PostBody = (props) => {
    return (
      <div className='colContainer'>{props.children}</div>
    )
  }
  const X = (props) => {
    return (
      <div>
        {!props.isProfileList && <XButton handleShow={props.handleShow}/>}
      </div>
    )
  }
  const PostInfo = (props) => {
    return (
      <div className='postTextBlock'>{props.children}</div>
    )
  }
  const Name = (props) => {
    return (
      <p>{props.name}</p>
    )
  }
  const Location = (props) => {
    return (
      <p className='locationText'>{props.location}</p>
    )
  }
  const Line = () => {
    return (
      <div className='postLine'/>
    )
  }
  const DateTime = (props) => {
    return (
      <div className='postDateTime'>{props.children}</div>
    )
  }
  const DATE = (props) => {
    return (
      <p>{`${props.day} ${props.month}/${props.date}`}</p>
    )
  }
  const TIME = (props) => {
    return (
      <p>{`${props.startTime} - ${props.endTime}`}</p>
    )
  }
  const SendSave = (props) => {
    return (
      <div className='sendSaveContainer'>{props.children}</div>
    )
  }
  // defines how a post is displayed
  function Post(props) {
    const day = props.start.toLocaleString('default', {weekday: 'short'});
    const month = ((props.start.getMonth()) + 1).toString().padStart(2, '0');
    const date = props.start.getDate().toString().padStart(2, '0');
    const startTime = props.start.toLocaleString('default', {hour: '2-digit', minute: '2-digit'});
    const endTime = props.end.toLocaleString('default', {hour: '2-digit', minute: '2-digit'});
  
    // only display a post in if the list it's in is not the user's saved list
    // if it is the user's saved list, only display if bookmarked is true
    return (
      <APost isProfileList={props.isProfileList} isUserSavedList={props.isUserSavedList} bookmarked={props.bookmarked} show={props.show}>
        <UserIcon initials={props.initials} iconColor={props.iconColor}/>
        <PostBody>
            <X isProfileList={props.isProfileList} handleShow={props.handleShow}/>
            {/* Top section of right side */}
            <PostInfo>
              <Name name={props.name}/>
              <Location location={props.location}/>
              <Line/>
              <DateTime>
                <DATE day={day} month={month} date={date}/>
                <TIME startTime={startTime} endTime={endTime}/>
              </DateTime>
            </PostInfo>
            <SendSave>
              <SendButton/>
              <SaveButton bookmarked={props.bookmarked}
                          handleBookmark={props.handleBookmark}/>
            </SendSave>
        </PostBody>
      </APost>
    )
}

export default Post;