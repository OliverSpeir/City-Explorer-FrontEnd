import React from 'react'
import Container from 'react-bootstrap/Container'
import WeatherDay from './WeatherDay.js'

class DisplayWeather extends React.Component {
    render() {
        return (
            <Container id="debug">
                {this.props.data.map((x, idx) => (
                    <WeatherDay key={idx}
                        WeatherKey={idx}
                        date={x.date}
                        high={x.max}
                        low={x.min}
                        description={x.description}
                    />
                ))}
            </Container>
        )
    }
}

export default DisplayWeather

