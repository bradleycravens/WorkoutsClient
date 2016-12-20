import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { logout } from '../actions/authActions'

class NavBar extends React.Component {
  logout(e) {
    e.preventDefault()
    this.props.logout()
  }

  render() {
    const { isAuthenticated } = this.props.auth

    const userLinks = (
      <ul className="nav navbar-nav navbar-left">
        <li><Link to="/workouts">Workouts</Link></li>
        <li><Link to="/new_workout">New Workout</Link></li>
      </ul>
    )

    const userLogout = (
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#" onClick={this.logout.bind(this)}>Logout</a></li>
      </ul>
    )

    const guestLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/signup">Sign up</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    )

    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">Home</Link>
          </div>

          <div className="collapse navbar-collapse">
            { isAuthenticated ? userLinks : null }
            { isAuthenticated ? userLogout : guestLinks }
          </div>
        </div>
      </nav>
    )
  }
}

NavBar.propTypes = {
  auth: React.PropTypes.object.isRequired,
  logout: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, { logout })(NavBar)