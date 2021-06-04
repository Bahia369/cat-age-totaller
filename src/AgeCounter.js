import React, { useState } from "react";

export default function AgeCounter(props) {
  const [currentAge, setCurrentAge] = useState(0);

  const catAge = currentAge < 9 ? "Young" : "Old";

  function updateTheAge(changeBy) {
    setCurrentAge(currentAge + changeBy);
    props.update(changeby);
  }

  return (
    <div classname={`AgeCounter ${catAge}`}>
      <button onclick={() => updateTheAge(1)}>Add A Year</button>
      <button onclick={() => updateTheAge(-currentAge)}>Add New Life</button>
      <h4>{props.cat}</h4>
      <h3>{currentAge}</h3>
    </div>
  );
}
