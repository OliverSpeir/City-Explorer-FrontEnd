import React from 'react'
import Container from 'react-bootstrap/Container'

class CityResults extends React.Component {
    render(){
        return(
            <>
            <Container
                fluid
            >
            <h2> Results of Search: </h2>
            <ul><p>City: {this.props.name}</p></ul>
            <ul><p> Longitude: {this.props.long}</p></ul>
            <ul><p> Latitude: {this.props.lat}</p></ul>
            </Container>
            </>
        )
    }
}

export default CityResults