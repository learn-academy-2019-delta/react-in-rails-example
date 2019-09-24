import React from "react"
import PropTypes from "prop-types"
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { Alert } from 'reactstrap'
import SignOutButton from './SignOutButton'
import SignInButton from './SignInButton'

class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Router>
          <Alert color="primary">
            This is a primary alert — check it out!
          </Alert>
          <h1>HelloWorld Component</h1>
          {this.props.is_logged_in &&
            <Route 
              render={(routeProps)=> {
                return(
                  <SignOutButton
                    {...routeProps}
                    signOutRoute = { this.props.sign_out_route }
                    currentUser = { this.props.current_user }
                  />
                )
              }} 
            />

          }
          
          {!this.props.is_logged_in &&
            <Route 
              render={(routeProps)=>{
                return(
                  <SignInButton
                    {...routeProps}
                    signInRoute = { this.props.sign_in_route }
                  />
                )
              }}
            />
          }
        </Router>
      </React.Fragment>
    );
  }
}

export default HelloWorld
