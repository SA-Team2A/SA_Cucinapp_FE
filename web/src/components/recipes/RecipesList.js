import React, { Component } from 'react'

// Components
import Recipe from './Recipe'
import Error from '../utilities/Error'
import Loading from '../utilities/Loading'

export default class RecipesList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoaded: null
    }
  }


  componentDidMount() {
    document.title = "recipes"
    this.setState({ isLoaded: true })
  }


  render() {
    const { isLoaded } = this.state
    var list = null, items = []

    const recipe = {
      name: "Name",
      description: "lorem ipsum lalala a lorem ipsum lalala alorem ipsum lalala alorem ipsum lalala a"
    }

    for (var i = 0; i < 10; i++) {
      items.push(recipe)
    }

    list = items.map(
      (recipe, index) => (<Recipe key={ index } recipe={ recipe } />)

    )

    if (isLoaded) {
      return (
        <div className="mx-auto">
          { list  }
        </div>
      )
    } else if (isLoaded == null) {
      return <Loading />
    } else {
      return <Error />
    }
  }
}
