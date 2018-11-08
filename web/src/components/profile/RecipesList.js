import React, { Component } from 'react'

// Assets
import add_button from '../../assets/add_button.png'

// Components
import RecipeTile from './RecipeTile'

export default class RecipesList extends Component {

  componentDidMount() {
    document.title = "recipes"
  }

  render() {
    const { recipes } = this.props

    const list = recipes.map((recipe, index) =>
      (<li key={ index } className="d-inline-block m-2">
        <RecipeTile recipe={ recipe } />
      </li>)
    )

    return (
      <div className="container mx-auto">
        <ul className="p-0 text-center">
          <li key={0} className="d-inline-block m-2">
            <div className="card recipe ">
              <img className="card-img-top" src={ add_button } alt="recipeImage"/>
              <div className="card-body">
                <h5 className="card-title">Crear nueva receta</h5>
                {/* <div className="card-text text-truncate">{ description }</div> */}
              </div>
            </div>
          </li>

          { list  }
        </ul>
      </div>
    )
  }
}
