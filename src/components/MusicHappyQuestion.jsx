/* eslint-disable react/prop-types */

/**
 * This component is used to collect and update if music makes the user happy. 
 */

import { useState } from 'react'

const options = [
    "Yes, absolutely",
    "No, I like the silence",
    "Sometimes"
]

const MusicHappyQuestion = () => {
    const [happyMusic, setHappyMusic] = useState("") 
    /* useState for tracking selected option */

    return (
        <form> 
            <label>Does music make you happy?</label>
            {options.map((option) => (
                <label key={option}>
                    <input
                        type="radio"
                        value={option}
                        onChange={(event) => setHappyMusic(event.target.value)}
                        checked={happyMusic === option} 
                        /*Check if the option is selected*/
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
