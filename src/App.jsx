/* eslint-disable react/prop-types */

import { useState } from 'react'

import MoodBoost from './components/MoodBoost'
import MusicHappyQuestion from './components/MusicHappyQuestion'
import GoToHappySong from './components/GoToHappySong'

const App = () => {
  const [formData, setFormData] = useState({
    MoodBoost: "",
    MusicHappyQuestion: "",
    GoToHappySong: ""
  })

  const updateFormData = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    })
  }

  return (
    <div>
      <h2>1.</h2>
      <MoodBoost updateFormData={updateFormData} value={formData.MoodBoost} />
      <h2>2.</h2>
      <MusicHappyQuestion updateFormData={updateFormData} value={formData.MusicHappyQuestion} />
      <h2>3.</h2>
      <GoToHappySong updateFormData={updateFormData} value={formData.GoToHappySong} />
    </div>
  )
}

export default App
