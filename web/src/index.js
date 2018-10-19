import React from 'react'
import ReactDOM from 'react-dom'

// JS
import 'bootstrap'
import * as serviceWorker from './js/serviceWorker'

// CSS
import 'animate.css/animate.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// SASS
import './styles/sass/app.sass'

// Components
import RoutesBuilder from './components/RoutesBuilder'
import { BrowserRouter as Router } from 'react-router-dom'

// App
ReactDOM.render(
  <Router>
    <RoutesBuilder />
  </Router>,
  document.getElementById('root')
)
serviceWorker.unregister()
