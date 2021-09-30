import PropTypes from 'prop-types';

function ButtonImage({src, text, cb}) {
  return (
    <button className="btn">
      <img src={src} alt={text} onClick={cb} />
    </button>
  )
}

ButtonImage.propTypes = {
  src: PropTypes.string.isRequired,
  text: PropTypes.string,
  cb: PropTypes.func,
}

export default ButtonImage
