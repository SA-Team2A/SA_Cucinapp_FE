import React, { Component } from 'react'

// Assets
import { auth_req } from '../../js/request'

// Components
import Error from '../utilities/Error'
import Loading from '../utilities/Loading'

export default class RecipeForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoaded: null,
      cuisines: null,
      diets: null,
      meals: null,
      difficulties: null
    }
  }

  componentDidMount() {
    document.title = 'New recipe'
    const body = {
      query: '{ getCuisines { id name } getDiets { id name } getMeals { id name } getDifficulties { id name } }',
    }

    auth_req(body).then(
      res => {
        this.setState({
          cuisines: res.data.data.getCuisines,
          diets: res.data.data.getDiets,
          meals: res.data.data.getMeals,
          difficulties: res.data.data.getDifficulties,
          isLoaded: true
        })
      }
    ).catch(
      err => {
        this.setState({ isLoaded: false })
      }
    )
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
    const { isLoaded, cuisines, diets, difficulties, meals } = this.state

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
              <label htmlFor="cuisine">Cocina</label>
            <select className="form-control" id="cuisine">
                { this.mapElements(cuisines) }
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="meal">Meal</label>
              <select className="form-control" id="meal">
                { this.mapElements(meals) }
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="diet">Dieta</label>
              <select className="form-control" id="diet">
                { this.mapElements(diets) }
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="difficulty">Dificultad</label>
              <select className="form-control" id="difficulty">
                { this.mapElements(difficulties) }
              </select>
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
