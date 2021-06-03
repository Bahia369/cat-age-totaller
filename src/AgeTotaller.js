import React, { useState } from "react";
import AgeCounter from "./AgeCounter";

const AgeTotaller = () => {
  const [cats, setCats] = useState(["Babbu", "Pappu", "Laddu", "Bappu"]);
  const [newCat, setNewcat] = useState("");

  return (
    <div className="AgeTotaller">
      <div className="cats"></div>
    </div>
  );
};

export default AgeTotaller;
