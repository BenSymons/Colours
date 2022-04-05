import './App.css';
import ColoursList from './components/ColoursList';

function App() {
  return (
    <div className="App">
      <h1 className="heading">Today, the colour of the day is <span className="colour_of_day">PURPLE</span></h1>
      <div className="color_container">
      <p>Other colours are:</p>
        <ColoursList/>
      </div>
    </div>
  );
}

export default App;
