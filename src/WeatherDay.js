import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
class WeatherDay extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col sm>
                        Date:
                    </Col>
                    {this.props.date}
                </Row>
                <Row>
                    <Col sm>
                        High:
                    </Col>
                    {this.props.high}
                </Row>
                <Row>
                    <Col sm>
                        Low:
                    </Col>
                    {this.props.low}
                </Row>
                <Row>
                    <Col sm>
                        Description:
                    </Col>
                    {this.props.description}
                </Row>
            </Container>
        )
    }
}

export default WeatherDay