import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

// Assets
import Store from '../js/store'
import { Routes } from '../js/routes'


// Components
import App from './App'

export default class RoutesBuilder extends Component {

  constructor(props){
    super(props)
    this.state = {
      authed: Store.getState().session
    }
  }

  componentDidMount(){
    Store.subscribe(() => {
      this.setState({ authed: Store.getState().session })
    })
  }

  render() {
    const { authed } = this.state
    const routes = Routes.map((route, index) => {

      if (!('path' in route)) {
        return (<Route key={ index } component={ route.component }/>)
      }

      if (!('redirect' in route)) {
        return (<Route key={ index } exact path={ route.path } component={ route.component }/>)
      }

      if (route.redirect.when) {
        return (authed) ?
          (<Redirect key={ index } exact from={ route.path } to={ route.redirect.to } />) :
          (<Route key={ index } exact path={ route.path } component={ route.component }/>)
      } else {
        return (!authed) ?
          (<Redirect key={ index } exact from={ route.path } to={ route.redirect.to } />) :
          (<Route key={ index } exact path={ route.path } component={ route.component }/>)
      }
    })

    return (
      <App>
        <Switch>
          { routes }
        </Switch>
      </App>
    )
  }
}
