import React from 'react'
import Container from 'react-bootstrap/Container'

class DisplayWeather extends React.Component {
    render () {
        return (
            <>
        <Container>
         <h3>{this.props.date}</h3>
         <p>{this.props.description}</p>
         </Container>
            </>
        )
    }

}

export default DisplayWeather