import './style.css'

const App = () => {
  return (
    <div className="App">
      <h1>Mars Photo API</h1>

      <h3>Curiosity</h3>

      <div id="main-select-box">
        <label for="sol">Sol (Mars Solar Day)</label><br/>
        <input type="number"></input><br/>
        
        <label for="cars">Camera</label><br/>

        <select name="cars" id="cars">
          <option value="any">Any</option>
          <option value="FHAZ">Front Hazard Avoidance Camera (FHAZ)</option>
          <option value="RHAZ">Rear Hazard Avoidance Camera (RHAZ)</option>
          <option value="MAST">Mast Camera (MAST)</option>
          <option value="CHEMCAM">Chemistry and Camera Complex (CHEMCAM)</option>
          <option value="MAHLI">Mars Hand Lens Imager (MAHLI)</option>
          <option value="MARDI">Mars Descent Imager (MARDI)</option>
          <option value="NAVCAM">Navigation Camera (NAVCAM)</option>
          <option value="PANCAM">Panoramic Camera (PANCAM)</option>
          <option value="MINITES">	Miniature Thermal Emission Spectrometer (MINITES)</option>
        </select><br/>

        <button>Find Photos</button>

      </div>
    </div>
  );
}

export default App;
