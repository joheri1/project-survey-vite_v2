/* eslint-disable react/prop-types */

/**
 * This component is used to show a summary of the user's answers in a form.
 */

const Summary = ({ formData }) => {
    return (
      <div>
        <h2>Summary of your answers</h2>
        <p><strong>Mood-Boosting Activity:</strong> {formData.MoodBoost}</p>
        <p><strong>Does Music Make You Happy?</strong> {formData.MusicHappyQuestion}</p>
        <p><strong>Go-to Happy Song:</strong> {formData.GoToHappySong}</p>
      </div>
    )
  }
  
  export default Summary
  