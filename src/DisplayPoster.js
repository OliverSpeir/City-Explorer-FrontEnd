import React from 'react'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
class DisplayPoster extends React.Component {
    render () {
        return (
            <>
            <Container><h1>{this.props.title}</h1></Container>
            <Image
                thumbnail = {true}
                src = {`https://image.tmdb.org/t/p/original/${this.props.poster}`}
            />
            </>
        )
    }

}

export default DisplayPoster