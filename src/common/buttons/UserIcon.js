const UserIcon = (props) => {
  return (
    <button className='userIcon' style={{backgroundColor: props.iconColor}}>
      {props.initials}
    </button>
  )
}

export default UserIcon;