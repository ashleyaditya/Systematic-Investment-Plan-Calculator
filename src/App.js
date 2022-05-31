import "./App.css";
import Header from "./component/Header/Header";
import Range from "./component/Range/Range";

function App() {
  return (
    <div>
      <Header />
      <Range heading="Monthly investment" min={500} max={100000} symbol="₹" />
      <Range heading="Expected return rate" min={0} max={30} symbol="%" />
      <Range heading="Time Period" min={0} max={10} symbol="Yr" />
    </div>
  );
}

export default App;
