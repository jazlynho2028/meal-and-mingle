import getCSSVar from "/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/common/getCSSVar.js";

const UserIcon = (props) => {
  return (
    <button className='userIcon' style={{ backgroundColor: props.user?.color || getCSSVar('--lightGray') }}>
      {props.user?.initials || 'NA'}
    </button>
  )
}

export default UserIcon;