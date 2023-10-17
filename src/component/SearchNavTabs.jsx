import { Link, useResolvedPath } from 'react-router-dom'
import '../../src/App.css'
import { usePhotoContext } from '../Context/PhotoContext'

const SearchNavTabs = () => {
  // const usePath = useResolvedPath().pathname.substring(1)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <nav className="searchButtons">
      <p onClick={handleSubmit}>
        <Link to="/mountain">Mountain</Link>
      </p>
      <p onClick={handleSubmit}>
        <Link to="/beach">Beaches</Link>
      </p>
      <p onClick={handleSubmit}>
        <Link to="/bird">Bird</Link>
      </p>
      <p onClick={handleSubmit}>
        <Link to="/food">Food</Link>
      </p>
    </nav>
  )
}

export default SearchNavTabs
