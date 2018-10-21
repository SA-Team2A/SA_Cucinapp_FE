import React, { Component } from 'react'

// Assets
import store from '../js/store'
import { req } from '../js/request'
import { login } from '../js/actions'

// Components
import Error from './utilities/Error'
import Loading from './utilities/Loading'

export default class SignIn extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoaded: null
    }
  }
  render() {
    const { isLoaded } = this.state

    if (isLoaded) {
      return (
        <div>Login</div>
      )
    } else if (isLoaded == null) {
      return <Loading />
    } else {
      return <Error />
    }
  }
}
