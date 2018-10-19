import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Coponents
/* import components here */

export default class Header extends Component {

  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-black">
        <Link className="navbar-brand font-logo" to="/">Cucinapp</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicia Sesión</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Regístrate</Link>
            </li>
          </ul>
        </div>
      </nav>

    )
  }
}
