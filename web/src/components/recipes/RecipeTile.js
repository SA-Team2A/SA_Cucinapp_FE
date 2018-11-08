import React, { Component } from 'react'

// Components
import Error from '../utilities/Error'
import Loading from '../utilities/Loading'

export default class Recipe extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoaded: null
    }
  }


  componentDidMount() {
    this.setState({ isLoaded: true })
  }


  render() {
    const { isLoaded } = this.state
    const { name, description } = this.props.recipe

    if (isLoaded) {
      return (
        <div className="card recipe ">
          <img className="card-img-top" src="https://i.pinimg.com/originals/ab/e7/87/abe787d7161d9aa7f33a658d97c5e638.jpg" alt="recipeImage"/>
          <div className="card-body">
            <h5 className="card-title">{ name }</h5>
            <div className="card-text text-truncate">{ description }</div>
          </div>
        </div>
      )
    } else if (isLoaded == null) {
      return <Loading />
    } else {
      return <Error />
    }
  }
}
