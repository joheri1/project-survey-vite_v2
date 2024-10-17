/* eslint-disable react/prop-types */

/**
 * This component is used to collect and update the user's Mood Boosting activity in a form.
 */

import { useState } from 'react';

function MoodBoost() {
  const [moodBoost, setMoodBoost] = useState('')
  // Start with an empty string

  const handleInputChange = (event) => {
    setMoodBoost(event.target.value)
    // Update the empty string with user input
  };

  return (
    <div>
      <label>What is your favorite mood-boosting activity?</label>
      <input type="text" value={moodBoost} onChange={handleInputChange} />
      <p>You typed: {moodBoost}</p>
    </div>
  )
}

export default MoodBoost

/**
* Summary:
 * This component displays an input field for the user's mood-boosting activity, 
 * and the user's input is updated dynamically through the handleInputChange function.
*/
