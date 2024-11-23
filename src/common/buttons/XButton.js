// display x button
const XButton = ({handleShow}) => {
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

export default XButton;