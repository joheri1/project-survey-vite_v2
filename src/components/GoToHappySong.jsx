/* eslint-disable react/prop-types */

/**
 * This component is used to collect and update the user's go-to happy song in a form.
 */

export const GoToHappySong = ({ updateFormData, value }) => {
  const handleGoToHappySong = (event) => {
    updateFormData("goToHappySong", event.target.value);
  }

  return (
    <div className="border-box">
      <label>What is your go-to happy song?</label>
      <select value={value} onChange={handleGoToHappySong}>
        <option>Select a happy song </option>
        <option value="happy-pharrell">Happy - Pharrell Williams</option>
        <option value="happy-rem">Shiny Happy People - R.E.M.</option>
        <option value="happy-bobby">Don´t Worry, Be Happy - Bobby McFerrin</option>
        <option value="happy-edwin">Oh Happy Day - Edwin Hawkins Singers</option>
        <option value="happy-stevie">Happy Birthday - Stevie Wonder</option>
        <option value="happy-turtles">Happy Together — The Turtles</option>
      </select>
    </div>
  )
}

export default GoToHappySong

/**
* Summary:
* This component provides a dropdown for selecting the user's favorite happy song and updates the form state when a selection is made.
*/
