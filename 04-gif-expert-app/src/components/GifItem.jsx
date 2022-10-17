
import PropTypes from 'prop-types';

export const GifItem = ({title,url}) => {
  return (
    <>
        <div className="card">
            <img src={url} alt={title?title:"N/A"}></img>
            <p>{title?title:"	༼つಠ益ಠ༽つ ─=≡ΣO))"}</p>
        </div>
    </>
  )
}


GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

