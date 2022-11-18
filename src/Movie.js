import React from 'react'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'

class Movie extends React.Component {
    render() {
        return (
            <Container>
                <h2>{this.props.title} </h2>
                {this.props.src && <Image thumbnail={true} src={`https://image.tmdb.org/t/p/original/${this.props.src}`} />}
            </Container>
        )
    }
}

export default Movie