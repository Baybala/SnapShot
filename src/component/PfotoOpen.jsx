import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

const PhotoOpen = ({ title, url, path }) => {
  const navigate = useNavigate()

  const handleWindowClose = (e) => {
    navigate(`/${path}`)
  }

  return (
    <div className="photoOpenBackdrop" onClick={handleWindowClose}>
      <div className="photoOpen" onClick={(e) => e.stopPropagation()}>
        <div className="photoOpenHead">
          <h6>{title}</h6>
          <button onClick={handleWindowClose}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <div className="photoOpenBody">
          <img src={url} alt={title} />
        </div>
      </div>
    </div>
  )
}

export default PhotoOpen
