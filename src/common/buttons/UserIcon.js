import getCSSVar from "../getCSSVar";

const UserIcon = (props) => {
  return (
    <button className='userIcon' style={{ backgroundColor: props.user?.color || getCSSVar('--lightGray') }}>
      {props.user?.initials || 'NA'}
    </button>
  )
}

export default UserIcon;