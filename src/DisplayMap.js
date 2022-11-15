import React from 'react'
import Image from 'react-bootstrap/Image'

class DisplayMap extends React.Component {
    render () {
        return (
            <Image
                src = {`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.props.lat},${this.props.long}&zoom=8`}
            />
        )
    }

}

export default DisplayMap