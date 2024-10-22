import { useState } from 'react'

import Header from './Header'
import MoodBoost from './MoodBoost'
import MusicHappyQuestion from './MusicHappyQuestion'
import GoToHappySong from './GoToHappySong'
import Summary from './Summary'
import "../styles/App.css"

const App = () => {
  const [formData, setFormData] = useState({
    MoodBoost: "",
    MusicHappyQuestion: "",
    GoToHappySong: ""
  })

  const [showSummary, setShowSummary] = useState(false)

  const updateFormData = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setShowSummary(true)
  }

  return (
    <div>
      <Header />
      {showSummary ? (
        <Summary formData={formData} />
      ) : (
        <div className="question-container">
          <form onSubmit={handleSubmit}>
            <h1>1.</h1>
            <MoodBoost updateFormData={updateFormData} value={formData.MoodBoost} />
            <h1>2.</h1>
            <MusicHappyQuestion updateFormData={updateFormData} value={formData.MusicHappyQuestion} />
            <h1>3.</h1>
            <GoToHappySong updateFormData={updateFormData} value={formData.GoToHappySong} />
            <button className="button" type="submit">Submit Survey!</button>
          </form>
        </div>
      )}
    </div>
  )
}

export default App
