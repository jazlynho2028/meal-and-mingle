// display send button
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

export default SendButton;