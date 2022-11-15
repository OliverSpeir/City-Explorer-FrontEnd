import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import CityResults from './CityResults.js';
import DisplayMap from './DisplayMap';
import Alert from 'react-bootstrap/Alert'

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
          <Form.Label>Search for any City</Form.Label>
          <Form.Control autoFocus type="text" placeholder="e.g. Seattle" onChange ={this.handleChange}/>
        </Form.Group>
        <Button type ="submit" id="abc">Explore!</Button>
      </Form>
      {
          this.state.isError
            ? <Alert variant="danger">{this.state.errorMessage}</Alert>
            : <>
              <CityResults
                long = {this.state.lon}
                lat = {this.state.lat}
                name = {this.state.city}
              />
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
    
    
    </>


  )




}


}


export default App;
