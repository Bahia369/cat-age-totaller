import React, { useState } from "react";
import AgeCounter from "./AgeCounter";

const AgeTotaller = () => {
  const [cats, setCats] = useState(["Babbu", "Pappu", "Laddu", "Bappu"]);
  const [newCat, setNewcat] = useState("");
  const [totalAge, setTotalAge] = useState(0);

  function addNewName() {
    if (newCat.length > 2) {
      const newCats = [...cats, newCat];
      setCats(newCats);
      setNewcat("");
    }
  }

  function update(changeBy) {
    setTotalAge(totalAge + ChangeBy);
  }
  return (
    <div className="AgeTotaller">
      <div className="cats"></div>
    </div>
  );
};

export default AgeTotaller;
