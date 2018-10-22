import React, { Component } from 'react'

// Assets
import user_img from '../../assets/user.svg'
import { auth_req } from '../../js/request'

// Components
import Error from '../utilities/Error'
import Loading from '../utilities/Loading'

export default class MyProfile extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoaded: null,
      user: null
    }
  }

  componentDidMount() {
    const body = { query: '{ user: getMyProfile { name username email } }' }

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
  }


  render() {
    const { isLoaded, user } = this.state
    // document.title = user.name // TODO cuando user sea nulo?
    // (Imagen, Nombre, Editar, Seguidores, Seguidos, Redes Sociales)

    if (isLoaded) {
      return (
        <div className="container">
          <div className="row">
            <div className="mt-md-5 mx-auto">
              <img src={ user_img } class="rounded-circle"
                alt="profileImage" width="175"/>
              <h1 className="text-center text-teal">{ user.username }</h1>
            </div>

          </div>
          <div className="row">
            <ul className="nav nav-tabs col-12 nav-fill pr-0" id="myTab" role="tablist">
              <li className="nav-item">
                <a className="nav-link link-primary active" id="collections-tab" data-toggle="tab"
                  href="#collections" role="tab" aria-controls="collections"
                  aria-selected="true">Colecciones</a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-primary" id="favorites-tab" data-toggle="tab"
                  href="#favorites" role="tab" aria-controls="favorites"
                  aria-selected="false">Favoritos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-primary" id="myRecipes-tab" data-toggle="tab"
                  href="#myRecipes" role="tab" aria-controls="myRecipes"
                  aria-selected="false">Mis Recetas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-primary" id="shoppingList-tab" data-toggle="tab"
                  href="#shoppingList" role="tab" aria-controls="shoppingList"
                  aria-selected="false">Lista del Súper</a>
              </li>
            </ul>
            <div className="tab-content p-md-3" id="myTabContent">
              <div className="tab-pane fade show active" id="collections"
                role="tabpanel" aria-labelledby="home-tab">
                Aqui van mis colecciones
              </div>
              <div className="tab-pane fade" id="favorites" role="tabpanel"
                aria-labelledby="profile-tab">
                Aqui van mis favoritos
              </div>
              <div className="tab-pane fade" id="myRecipes" role="tabpanel"
                aria-labelledby="contact-tab">
                Aui van mis recetas
              </div>
              <div className="tab-pane fade" id="shoppingList" role="tabpanel"
                aria-labelledby="contact-tab">
                Aui van mi lista del super
              </div>
            </div>
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
