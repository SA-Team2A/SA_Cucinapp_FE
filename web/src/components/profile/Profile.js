import React, { Component } from 'react'

// Assets

// Components
import MyProfile from './MyProfile'
import OtherProfile from './OtherProfile'
import Error from '../utilities/Error'
import Loading from '../utilities/Loading'

export default class Profile extends Component {

  constructor(props) {
    super(props)
    this.MY_PROFILE = 0
    this.OTHER_PROFILE = 1
    this.state = {
      view: null
    }
  }

  componentDidMount() {
    const { match: { params: { param } } } = this.props
    if (!param){
      this.setState({ view: this.MY_PROFILE })
    } else {
      this.setState({ view: this.OTHER_PROFILE })
    }
  }

  render() {
    const { view } = this.state
    const { match: { params: { param } } } = this.props
    return (view === this.MY_PROFILE) ? (<MyProfile />) :
      (view === this.OTHER_PROFILE) ? (<OtherProfile id={ param } />) : (<Error />)
  }
}

/*
var body = null

if (param) {
  // peticion con id
  body = {
    query: 'query getUser($id: ID!) { user: getUserById(_id: $id) { name username email } }',
    variables: { id: param }
  }
} else {
  body = { query: '{ user: getMyProfile { name username email } }' }
}

auth_req(body).then(
  res => {
    console.log(res)
    this.setState({
      user: res.data.data.user,
      isLoaded: true
    })
  }
).catch(
  err => {
    this.setState({ isLoaded: false })
  }
)
document.title = "Mi perfil"

*/
