import { useState } from 'react'
import Form from './Form'

const SearchBar = () => {
  const [inputData, setInputData] = useState('')

  const handleInputFieldChange = (e) => {
    setInputData(e.target.value)
  }

  return (
    <div>
      <div className="search">
        <div className="logo">
          <h1>SnapShot</h1>
        </div>
        <Form inputData={inputData} setInputData={handleInputFieldChange} />
      </div>
    </div>
  )
}

export default SearchBar
