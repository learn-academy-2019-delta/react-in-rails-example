import React from "react"
import PropTypes from "prop-types"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import { Alert } from 'reactstrap'
import UserHomePage from './UserHomePage'
import SignInButton from './SignInButton'
import Skateboards from './Skateboards'

class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Router>
          <Alert color="primary">
            This is a primary alert — check it out!
          </Alert>
          {this.props.is_logged_in &&
            <div>
              <Switch>
                <Route 
                  path="/skateboards"
                  component={Skateboards }
                />
                <Route 
                  render={(routeProps)=> {
                    return(
                      <UserHomePage 
                        {...routeProps}
                        signOutRoute = { this.props.sign_out_route }
                        currentUser = { this.props.current_user }
                      />
                    )
                  }} 
                />
              </Switch>
            </div>
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
