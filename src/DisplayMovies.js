import React from 'react'
import Container from 'react-bootstrap/Container'
import Movie from './Movie.js'

class DisplayMovies extends React.Component {
    render() {
        return (
            <Container>
                {this.props.data.map((x, idx) => (<Movie key={idx} title={x.title} src={x.poster} />))}
            </Container>
        )
    }
}

export default DisplayMovies
