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
      isLoaded: true
    }
  }

  componentDidMount(){
    document.title = 'Inicia Sesión'
    this.setState({ isLoaded: true })
  }

  render() {
    const { isLoaded } = this.state

    if (isLoaded) {
      return (
        <div className="acc_form mx-auto">
          <h3 className="text-center gv-font">Inicia sesión en Cucinapp</h3>
          <form className="acc_form mx-auto">
            <div className="form-group">
              {/* <label htmlFor="email">Correo electronico</label> */}
              <input type="email" className="form-control" id="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                title="Debe contener el simbolo '@' seguido de un dominio"
                placeholder="Correo electronico"/>
            </div>
            <div className="form-group">
              {/* <label for="password">Contraseña</label> */}
              <input type="password" className="form-control" id="password"
                placeholder="Contraseña" pattern="(?=.*\d)(?=.*[a-zA-Z]).{8,}"
                title="Debe contener al menos un numero, una letra y al menos 8
                o mas caracteres"/>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">Inicia sesión</button>
            </div>
          </form>
        </div>
      )
    } else if (isLoaded == null) {
      return <Loading />
    } else {
      return <Error />
    }
  }
}
