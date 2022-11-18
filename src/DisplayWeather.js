import React from 'react'
import Container from 'react-bootstrap/Container'

class DisplayWeather extends React.Component {
    render () {
        return (
            <>
        <Container>
            {this.props.data.map((x) => (
                <>
                <p> Date: {x.date}</p>
                <p> High : {x.max} Low : {x.min}</p>
                <p> Description: {x.description} </p>
                </>
            ))} 
         </Container>
            </>
        )
    }
}

export default DisplayWeather