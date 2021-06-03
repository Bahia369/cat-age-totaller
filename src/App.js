import "./styles.css";
import AgeTotaller from "./AgeTotaller";

export default function App() {
  return (
    <div className="App">
      <h1>Cat age totaller</h1>
      <AgeTotaller />
    </div>
  );
}
const AgeCounter = () => {
  //  2 Buttons with on click.

  console.log(AgeCounter);
  <div classname=".AgeCounter">
    <button>Add A Year</button>
    <button>Add New Life</button>
    <h3>Display Current Age</h3>
  </div>;
};

// 1. Create a AgeCounter component which uses useState to store the current age and has two buttons - one to add a year (increment state by 1) and one to add a new life (set state back to 0). Create these functions and use the onClick event on the buttons to use them. Display the current age within the AgeCounter component in a h3 tag. Use a className of ".AgeCounter" for the component (it should be a div with a h3 tag and two buttons inside, the CSS is already provided in styles.css).
