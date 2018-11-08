import React, { Component } from 'react'

// Assets
// import { auth_req } from '../../js/request'
import user_img from '../../assets/user.svg'


// Components
import Error from '../utilities/Error'
import Loading from '../utilities/Loading'

export default class RecipeForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoaded: true, //Esto es null
      difficulties: null
    }
  }

  componentDidMount() {
    document.title = 'Publica una receta'
    // const body = {
    //   query: '{ getDifficulties { _id description } }',
    // }
    //
    // auth_req(body).then(
    //   res => {
    //     this.setState({
    //       difficulties: res.data.data.getDifficulties,
    //       isLoaded: true
    //     })
    //   }
    // ).catch(
    //   err => {
    //     this.setState({ isLoaded: false })
    //   }
    // )
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  mapElements(list) {
    return list.map(
      (item) => (<option key={ item.id } value={ item.id }>{ item.name }</option>)
    )
  }

  render() {
    const { isLoaded } = this.state

    if (isLoaded) {
      return (
        <div className="col-md-8 offset-md-2">
          <h3 className="text-center gv-font">Sube tus recetas y compartelas con la comunidad</h3>
          <form onSubmit={ (e) => this.handleSubmit(e) }>
            <div className="form-group">
              <input type="text" className="form-control" id="title"
                placeholder="Escribe el título aquí"/>
            </div>
            <div className="form-row">
              <div className="form-group col-md-2">
                <i className="material-icons">alarm</i>
                <input type="number" className="form-control" id="total-time"/>
                <span>min</span>
              </div>
              <div className="form-group col-md-2">
                <i className="material-icons">short_text</i>
                <select className="form-control" id="difficulty">
                  {/* { this.mapElements(difficulties) } Toca revisar*/}
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <input type="number" className="form-control" id="portions"/>
                <span>Porciones</span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 text-center my-auto">
                <img src={ user_img } alt="una foto" className="w-100 rounded-circle"/>
                <span>Usuario</span>
              </div>
              <div className="col-md-10">
                <textarea className="form-control" id="description" rows="3"
                 placeholder="Cuéntanos un poco más sobre tu receta">
                </textarea>
              </div>
            </div>
            <hr/>
            <div className="form-group">
              <label htmlFor="ingredients">Ingredientes</label>
              <textarea className="form-control" id="ingredients" rows="3"
               placeholder="Escribe los ingredientes de tu receta">
              </textarea>
            </div>
            <div className="form-group">
              <label htmlFor="steps">Preparación</label>
            <textarea className="form-control" id="steps" rows="3"
               placeholder="Escribe los pasos de tu receta">
              </textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">Sube tu receta</button>
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
