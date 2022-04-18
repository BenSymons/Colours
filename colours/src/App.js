import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="heading">
        Today, the colour of the day is
        <span className="colour_of_day">Black</span>
      </h1>
      <div className="color_container">
        <p>Other colours are:</p>
        <ul>
          <li className="red">RED</li>
          <li className="blue">BLUE</li>
          <li className="yellow">YELLOW</li>
          <li className="lime">LIME</li>
          <li className="teal">TEAL</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
