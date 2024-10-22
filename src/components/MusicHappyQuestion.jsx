/* eslint-disable react/prop-types */

/**
 * This component is used to collect and update if music makes the user happy. 
 */

import { useState } from 'react'

const options = [
    "Yes, absolutely",
    "No, I like the silence"
]

const MusicHappyQuestion = ({ updateFormData, value }) => {
  const [happyMusic, setHappyMusic] = useState(value)

  const handleOptionChange = (event) => {
    setHappyMusic(event.target.value) // Update local state
    updateFormData("MusicHappyQuestion", event.target.value) // Update form data in parent component
  }

  return (
    <form>
    <h2>Does music make you happy?</h2>
      {options.map((option) => (
        <label key={option} className="radio-label">
          <input
            type="radio"
            value={option}
            onChange={handleOptionChange} // Handle selection
            checked={happyMusic === option} // Check if selected
          />
          {option}
        </label>
      ))}
    </form>
  )
}

export default MusicHappyQuestion


/**
 * Summary:
 * This component displays radio buttons to ask if music makes the user happy. The options are "Yes," "No," and "Sometimes." The user's selection is stored in the component's state via useState. 
 */
