import getCSSVar from "/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/common/getCSSVar.js";

const CreateButton = () => {
    return (
        <button className='createButton'>
            <img src='https://cdn-icons-png.flaticon.com/128/992/992651.png' alt='add' style={{ width: 33, height: 'auto', filter: 'invert(1)' }} />
            Create
        </button>
    )
}

const FilterButton = () => {
    return (
        <button className='filterButton'>
            <img src='https://cdn-icons-png.flaticon.com/128/7693/7693332.png' alt='filter' style={{ width: 15, height: 'auto', filter: 'invert(1)' }} />
        </button>
    )
}

function SaveButton({ bookmarked, handleBookmark }) {
    const bookmarkImg = bookmarked ? 'https://cdn-icons-png.flaticon.com/128/102/102279.png' : 'https://cdn-icons-png.flaticon.com/128/5662/5662990.png';

    return (
        <button onClick={handleBookmark}>
            <img
                src={bookmarkImg}
                alt='Saved'
                style={{
                    width: 12,
                    height: 'auto',
                    filter: 'invert(31%) sepia(64%) saturate(229%) hue-rotate(212deg) brightness(89%) contrast(91%)'
                }}
            />
        </button>
    )
}

const SendButton = () => {
    return (
        <button>
            <img
                src='https://cdn-icons-png.flaticon.com/128/3024/3024593.png'
                alt='Send'
                style={{
                    width: 12,
                    height: 'auto',
                    filter: 'invert(31%) sepia(64%) saturate(229%) hue-rotate(212deg) brightness(89%) contrast(91%)'
                }}
            />
        </button>
    )
}

const XButton = ({ handleShow }) => {
    return (
        <div className='xButtonContainer'>
            <button onClick={handleShow}>
                <img
                    src='https://cdn-icons-png.flaticon.com/128/1828/1828778.png'
                    alt='Close'
                    style={{
                        width: 6,
                        height: 'auto',
                        filter: 'invert(41%) sepia(2%) saturate(3212%) hue-rotate(212deg) brightness(102%) contrast(78%)'
                    }}
                />
            </button>
        </div>
    )
}

const UserIcon = (props) => {
  return (
    <button className='userIcon' style={{ backgroundColor: props.user?.color || getCSSVar('--lightGray') }}>
      {props.user?.initials || 'NA'}
    </button>
  )
}

const Button = {
    Create: CreateButton,
    Filter: FilterButton,
    Save: SaveButton,
    Send: SendButton,
    X: XButton,
    User: UserIcon
}

export default Button;