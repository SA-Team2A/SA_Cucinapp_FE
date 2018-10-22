import React, { Component } from 'react'

// Components
import Error from '../utilities/Error'
import Loading from '../utilities/Loading'

export default class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoaded: null,
    }
  }

  componentDidMount() {
    document.title = 'Cucinapp'
    this.setState({ isLoaded: true })
  }


  render() {
    const { isLoaded } = this.state

    if (isLoaded) {
      return (
        <div>
          Hola soy la home
        </div>
      )
    } else if (isLoaded == null) {
      return <Loading />
    } else {
      return <Error />
    }
  }
}
