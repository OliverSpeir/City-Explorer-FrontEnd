import React from 'react';
import axios from 'axios';
import CityResults from './CityResults.js';
import DisplayMap from './DisplayMap';
import Alert from 'react-bootstrap/Alert'
import DisplayPoster from './DisplayPoster.js'
import DisplayWeather from './DisplayWeather.js'
import InputForm from './InputForm.js'

class App extends React.Component {
  constructor (props){
    super(props);
    this.state ={
      input: '',
      lon: '',
      lat: '',
      isError: false,
      city: '',
      weather: [],
      isCity: false,
      movies: []
    }
  }

handleSubmit = async (e) => {
  try {
    e.preventDefault();
    let cityInfo = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.input}&format=json`);
     this.setState({
      lon: cityInfo.data[0].lon,
      lat: cityInfo.data[0].lat,
      city: cityInfo.data[0].display_name,
      isError: false,
      isCity: true
    });
    await this.handleWeather();
  } catch (error){
    this.setState ({
      errorMessage: error.message,
      isError: true 
    });
  }
}
handleWeather = async () => {
  try {
    let weatherResp = await axios.get(`${process.env.REACT_APP_SERVER}/weather?cityName=${this.state.input}`)
    let movieResp = await axios.get(`${process.env.REACT_APP_SERVER}/movies?cityName=${this.state.input}`)
    this.setState({
      weather: weatherResp.data,
      movies: movieResp.data
    });
  } catch (error){
    this.setState ({
      errorMessage: error.message,
      isError: true 
    });
  }
}

handleChange = e => {
  this.setState({
    input: e.target.value
  });
};

render() {
  return (
  <>
      <h1>City Explorer</h1>
      <InputForm handleChange = {this.handleChange} handleSubmit = {this.handleSubmit}/>
      {this.state.isError ? 
      <Alert variant="danger">{this.state.errorMessage}</Alert> : 
      <CityResults long = {this.state.lon} lat = {this.state.lat} name = {this.state.city}/>}
      {this.state.lon !== ''?<><DisplayMap long = {this.state.lon} lat = {this.state.lat}/> </> : <p></p>}
      <DisplayWeather data = {this.state.weather}/> 
      <DisplayPoster data = {this.state.movies}/>       
  </>
  )
}
}
export default App;
