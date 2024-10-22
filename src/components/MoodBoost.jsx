/* eslint-disable react/prop-types */

/**
 * This component is used to collect and update the user's Mood Boosting activity in a form.
 */

const MoodBoost = ({ updateFormData, value }) => {
  const handleInputChange = (event) => {
    updateFormData("MoodBoost", event.target.value); // Update form data in App component
  }

  return (
    <div>
      <h2>What is your favorite mood-boosting activity?</h2>
      <input
        type="text"
        value={value}
        className="answer-container"
        placeholder="Write your answer here..."
        onChange={handleInputChange} />
    </div>
  )
}

export default MoodBoost

/**
* Summary:
 * This component displays an input field for the user's mood-boosting activity, 
 * and the user's input is updated dynamically through the handleInputChange function.
*/
