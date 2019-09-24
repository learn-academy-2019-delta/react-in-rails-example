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
        {this.props.is_logged_in &&
          <div>
            <h2>You are logged in {this.props.current_user.name}</h2>
            <a class='btn btn-danger' href={this.props.sign_out_route}>Sign Out</a>
          </div>
        }
        {!this.props.is_logged_in &&
          <div>
            <a class='btn btn-primary' href={this.props.sign_in_route}>Sign In</a>
          </div>
        }
      </React.Fragment>
    );
  }
}

export default HelloWorld
