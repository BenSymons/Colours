import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="heading">Today, the colour of the day is <span className="colour_of_day">PURPLE</span></h1>
      <div className="color_container">
      <p>Other colours are:</p>
        <div>
          <p className="red">RED</p>
          <p className="blue">BLUE</p>
          <p className="yellow">YELLOW</p>
          <p className="limme">LIME</p>
        </div>
      </div>
    </div>
  );
}

export default App;
