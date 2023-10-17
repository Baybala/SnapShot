import React from 'react'
import { Routes, Route, useLocation, useSearchParams } from 'react-router-dom'
import Headerlayout from './component/HeaderLayout'
import Item from './component/Item'
import './App.css'
import NotFound from './component/NotFound'
import PhotoOpen from './component/PfotoOpen'

function App() {
  const items = [
    { path: 'mountain', element: <Item searchTerm={'Mountain'} /> },
    { path: 'beach', element: <Item searchTerm={'Beach'} /> },
    { path: 'bird', element: <Item searchTerm={'Bird'} /> },
    { path: 'food', element: <Item searchTerm={'Food'} /> },
  ]
  const location = useLocation()

  const handlePathName = () => {
    const arr = location.pathname.split('/')
    const resolvedPath = `${arr[1]}/${arr[2]}`
    return resolvedPath
  }

  const [searchParams] = useSearchParams()

  let title = ''
  let url = ''

  if (searchParams.size > 0) {
    title = searchParams.get('title')
    url = searchParams.get('url')
  }

  return (
    <div className="App">
      <Routes>
        <Route element={<Headerlayout />}>
          {items.map((item) => {
            return (
              <Route path={item.path} element={item.element} key={item.path}>
                <Route
                  path=":photo"
                  element={
                    <PhotoOpen title={title} url={url} path={item.path} />
                  }
                />
              </Route>
            )
          })}
          <Route path="search/:searchInput" element={<Item />}>
            <Route
              path=":photo"
              element={
                <PhotoOpen title={title} url={url} path={handlePathName()} />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
