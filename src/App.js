import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import CityResults from './CityResults.js';
import DisplayMap from './DisplayMap';
import Alert from 'react-bootstrap/Alert'
import DisplayPoster from './DisplayPoster.js'
import DisplayWeather from './DisplayWeather.js'

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
    console.log(this.state.input);
    //console.log(this.state.lat);
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
  let movieUrl= "https://image.tmdb.org/t/p/original/"
  return (
    <>
      <h1>City Explorer</h1>
      <Form onSubmit= {this.handleSubmit}>
        <Form.Group>
          <Form.Label>Search for any City</Form.Label>
          <Form.Control autoFocus type="text" placeholder="e.g. Seattle" onChange ={this.handleChange}/>
        </Form.Group>
        <Button type ="submit" id="abc">Explore!</Button>
      </Form>
      {/* <Button onClick= {this.handleWeather}>Get Weather</Button> */}
      {
          this.state.isError
            ? <Alert variant="danger">{this.state.errorMessage}</Alert>
            : <>
              <CityResults
                long = {this.state.lon}
                lat = {this.state.lat}
                name = {this.state.city}
              />
            {/* {this.handleWeather}; */}
              </>
      }
      {
        this.state.lon !== ''
         ?
              <>        
              <DisplayMap
              long = {this.state.lon}
              lat = {this.state.lat}
              />
              </>
            :
            <p></p>
      }
    {this.state.weather.map(day => (
      <DisplayWeather date = {day.date} description = {day.description} />
    ))}
        {this.state.movies.map(data => (
      <DisplayPoster title = {data.title} poster = {data.poster}/>
    ))}
    
    </>


  )




}


}


export default App;
