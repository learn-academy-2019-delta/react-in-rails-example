import React from "react"
import PropTypes from "prop-types"
class SignInButton extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div>
          <a className='btn btn-primary' href={this.props.signInRoute}>Sign In</a>
        </div>
      </React.Fragment>
    );
  }
}

export default SignInButton
