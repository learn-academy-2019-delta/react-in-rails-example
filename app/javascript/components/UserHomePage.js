import React from "react"
import PropTypes from "prop-types"

import { Link } from 'react-router-dom'
class UserHomePage extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div>
          <h2>You are logged in {this.props.currentUser.name}</h2>
          <Link 
            to="/skateboards"
            className='btn btn-primary'
          >
            Skateboards
          </Link>
          <a className='btn btn-danger' href={this.props.signOutRoute}>Sign Out</a>
        </div>
      </React.Fragment>
    );
  }
}

export default UserHomePage
