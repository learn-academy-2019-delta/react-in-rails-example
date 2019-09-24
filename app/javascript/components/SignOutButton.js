import React from "react"
import PropTypes from "prop-types"
class SignOutButton extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div>
          <h2>You are logged in {this.props.currentUser.name}</h2>
          <a className='btn btn-danger' href={this.props.signOutRoute}>Sign Out</a>
        </div>
      </React.Fragment>
    );
  }
}

export default SignOutButton
