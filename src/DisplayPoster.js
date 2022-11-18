import React from 'react'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'

 


class DisplayPoster extends React.Component {
    render () {
        return (
            <>
            <Container>
            {this.props.data.map((x,idx) => (
            <>   
            <h1>{x.title}</h1>
            {(x.poster !== null) ? <Image key = {idx} thumbnail = {true} src = {`https://image.tmdb.org/t/p/original/${x.poster}`}/> : <p></p>}
            </>
            ))}
            </Container>
            </>
        )
    }

}

export default DisplayPoster

