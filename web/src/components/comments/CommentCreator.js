import React, { Component } from 'react'

// Components
import Error from '../utilities/Error'
import Loading from '../utilities/Loading'

//TODO: Creo que se puede hacer en el mismo de recetas

export default class BaseComponent extends Component {

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
        <form className="w-100" onSubmit={ (e) => this.handleSubmit(e) }>
          <div className="form-group row">
            <div className="col-md-2">
              Imagen del individuo
            </div>
            <div className="col-md-8">
              <textarea className="form-control" id="comment" rows="3"
               placeholder="¿Tienes algun comentario?">
              </textarea>
            </div>
            <div className="col-md-2 text-center">
              <button type="submit" className="btn btn-primary">Enviar</button>
            </div>
          </div>
        </form>
      )
    } else if (isLoaded == null) {
      return <Loading />
    } else {
      return <Error />
    }
  }
}
