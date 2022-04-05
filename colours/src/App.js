import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="heading">Today, the colour of the day is <span className="colour_of_day">PURPLE</span></h1>
      <div className="color_container">
      <p>Other colours are:</p>
        <div>
          <div>
            <p className="limme">LIME</p>
          </div>
          <div>
            <p className="yellow">YELLOW</p>
          </div>
          <div>
            <p className="blue">BLUE</p>
          </div>
          <div>
            <p className="red">RED</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
