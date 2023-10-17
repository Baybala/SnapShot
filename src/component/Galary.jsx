import { createSearchParams, useNavigate } from 'react-router-dom'
import { usePhotoContext } from '../Context/PhotoContext'
import Loading from './Loading'
import NoImages from './NoImages'

const Galary = () => {
  const photoContext = usePhotoContext()
  const result = photoContext.photoData
  const pictures = photoContext.downloading
  const handleURL = (farm, server, id, secret, picSize) => {
    return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_${picSize}.jpg`
  }
  let navigate = useNavigate()

  const handlePhotoOpen = (title, url) => {
    navigate({
      pathname: `${title}`,
      search: createSearchParams({ title: title, url: url }).toString(),
    })
  }

  let image =
    result && result.length > 0
      ? result.map((item) => {
          let id = item.id
          let title = item.title
          let secret = item.secret
          let server = item.server
          let farm = item.farm
          let url = handleURL(farm, server, id, secret, 'm')
          let resizeURL = handleURL(farm, server, id, secret, 'z')

          return (
            <li key={id}>
              <img
                src={url}
                alt={title}
                onClick={() => handlePhotoOpen(title, resizeURL)}
              />
            </li>
          )
        })
      : false

  return (
    <div className="pictures">
      {pictures ? <Loading /> : image ? <ul>{image}</ul> : <NoImages />}
    </div>
  )
}

export default Galary
