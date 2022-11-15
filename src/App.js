import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import CityResults from './CityResults.js';

class App extends React.Component {
  constructor (props){
    super(props);
    this.state ={
      input: '',
      lon: '',
      lat: '',
      isError: false,
      city: ''
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
      isError: false
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
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label>Search for City</Form.Label>
          <Form.Control type="text" placeholder="Seattle" onChange ={this.handleChange}/>
        </Form.Group>
        <Button type ="submit">Explore!</Button>
      </Form>
      {
          this.state.isError
            ? <p>{this.state.errorMessage}</p>
            : <CityResults
                long = {this.state.lon}
                lat = {this.state.lat}
                name = {this.state.city}
              />
        }
    
    
    </>


  )




}


}


export default App;
