import { Outlet } from 'react-router-dom'
import SearchBar from './SearchBar'
import SearchNavTabs from './SearchNavTabs'

const Headerlayout = () => {
  return (
    <>
      <SearchBar />
      <SearchNavTabs />
      <Outlet />
    </>
  )
}

export default Headerlayout
