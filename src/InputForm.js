import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class InputForm extends React.Component {
  render () {
    return (

<Form onSubmit= {this.props.handleSubmit}>
  <Form.Group>
    <Form.Label>Search for any City</Form.Label>
    <Form.Control autoFocus type="text" placeholder="e.g. Seattle" onChange ={this.props.handleChange}/>
  </Form.Group>
  <Button type ="submit" id="abc">Explore!</Button>
</Form>

    )
}
}

export default InputForm