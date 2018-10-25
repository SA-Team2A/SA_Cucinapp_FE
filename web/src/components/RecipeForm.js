import React, { Component } from 'react'

// Assets
import auth_req from '../js/request'

// Components
import Error from './utilities/Error'
import Loading from './utilities/Loading'

export default class RecipeForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoaded: null
    }
  }

  componentDidMount() {
    document.title = 'title'
    this.setState({ isLoaded: true })
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  render() {
    const { isLoaded } = this.state

    if (isLoaded) {
      return (
        <div className="acc_form mx-auto">
          <h3 className="text-center gv-font">Sube tus recetas y compartelas con la comunidad</h3>
          <form onSubmit={ (e) => this.handleSubmit(e) }>
            <div className="form-group">
              {/* <label htmlFor="name">Nombre</label> */}
              <input type="text" className="form-control" id="name"
                placeholder="Nombre"/>
            </div>
            <div className="form-group">
              {/* <label htmlFor="username">Usuario</label> */}
              <input type="text" className="form-control" id="username"
                pattern="[A-Za-z0-9]+"
                title="Debe contener solo letras y numeros"
                placeholder="Usuario"/>
            </div>
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
            <div className="form-group">
              {/* <label for="cpass">Confirma la contraseña</label> */}
              <input type="password" className="form-control" id="cpass"
                placeholder="Confirma la contraseña" pattern="(?=.*\d)(?=.*[a-zA-Z]).{8,}"
                title="Debe contener al menos un numero, una letra y al menos 8
                o mas caracteres" aria-describedby="equalPass"
                onChange={ (e) => this.handleChange(e) }/>
              { equalPass }
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">Regístrate</button>
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
