import React, { useState } from "react";

export default function AgeCounter(props) {
  const [currentAge, setCurrentAge] = useState(0);

  const catAge = currentAge < 9 ? "Young" : "Old";

  function updateTheAge(changeBy) {
    setCurrentAge(currentAge + changeBy);
    props.update(changeby);
  }

  return;

  <div classname={`AgeCounter ${catAge}`}>
    <button onclick={() => updateTheAge(1)}>Add A Year</button>
    <button onclick={() => updateTheAge(-currentAge)}>Add New Life</button>
    <h3>{currentAge}</h3>
    <h4>{props.cat}</h4>
  </div>;
}
// 1. Create a AgeCounter component which uses useState to store the current age and has two buttons - one to add a year (increment state by 1) and one to add a new life (set state back to 0). Create these functions and use the onClick event on the buttons to use them. Display the current age within the AgeCounter component in a h3 tag. Use a className of ".AgeCounter" for the component (it should be a div with a h3 tag and two buttons inside, the CSS is already provided in styles.css).
