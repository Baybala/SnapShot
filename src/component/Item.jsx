import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Galary from './Galary'
import { usePhotoContext } from '../Context/PhotoContext'

const Item = ({ searchTerm }) => {
  const location = useLocation()

  const searchWord =
    location.state || decodeURIComponent(location.pathname.substring(8))
  const photoContext = usePhotoContext()

  useEffect(() => {
    searchTerm
      ? photoContext.searchCall(searchTerm)
      : photoContext.searchCall(searchWord)
  }, [searchTerm])

  return (
    <div>
      <div className="pictieName">
        <h3>{searchTerm ? searchTerm : searchWord} Pictures</h3>
      </div>
      <Galary />
      <Outlet />
    </div>
  )
}

export default Item
