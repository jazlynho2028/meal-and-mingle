// display save button
function SaveButton({bookmarked, handleBookmark}) {
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

export default SaveButton;