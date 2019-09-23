import React from "react"
import PropTypes from "prop-types"

import { Alert } from 'reactstrap'
class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Alert color="primary">
          This is a primary alert — check it out!
        </Alert>
        <h1>HelloWorld Component</h1>
      </React.Fragment>
    );
  }
}

export default HelloWorld
