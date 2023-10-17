import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { usePhotoContext } from '../Context/PhotoContext'
import { useNavigate } from 'react-router-dom'

const Form = ({ inputData, setInputData }) => {
  const photoContext = usePhotoContext()
  const navigate = useNavigate()

  const handleButtonActive = () => {
    let inputLength = inputData.trim().length
    return inputLength > 0 ? 'searchButtonActive' : 'searchButton'
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    photoContext.searchCall(inputData)
    navigate(`/search/${inputData}`, { state: inputData })
  }

  return (
    <form className="input" onSubmit={handleSubmit}>
      <input
        className="searchInputField"
        value={inputData}
        onChange={(e) => setInputData(e)}
      />
      <button
        className={handleButtonActive()}
        disabled={inputData.trim().length === 0}
        onClick={handleSubmit}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </form>
  )
}

export default Form
