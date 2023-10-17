import axios from 'axios'
import { createContext, useContext, useState } from 'react'

const PhotoContext = createContext()

export function usePhotoContext() {
  return useContext(PhotoContext)
}

export function PhotoContextProvider({ children }) {
  const [photoData, setPhotoData] = useState('')
  const [downloading, setDownloading] = useState(true)

  const searchCall = (searchInput) => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=80e26ad9f79268390044a79b4cd40f35&tags=${searchInput}&per_page=24&tag=bird&nojsoncallback=1&format=json`,
      )
      .then((response) => {
        setPhotoData(response.data.photos.photo)
        setDownloading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <PhotoContext.Provider value={{ photoData, searchCall, downloading }}>
      {children}
    </PhotoContext.Provider>
  )
}
