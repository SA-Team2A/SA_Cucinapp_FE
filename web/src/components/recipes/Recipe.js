import React, { Component } from 'react'

// Assets
import user_img from '../../assets/user.svg'

// Components
import { Link } from 'react-router-dom'
import Error from '../utilities/Error'
import Loading from '../utilities/Loading'
import Comment from '../comments/Comment'
import CommentCreator from '../comments/CommentCreator'

export default class Recipe extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoaded: true, // Esto es null
      name: "Hola soy un titulo",
      time: 123,
      difficulty: "Media",
      portions: 10,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet leo nec pretium consectetur. Nullam feugiat nunc sed vestibulum rutrum. In ac tellus sit amet risus imperdiet ullamcorper. Morbi cursus interdum ex, non viverra erat tristique ut. Donec felis enim, tincidunt ac accumsan sit amet, placerat vitae eros. In sodales magna purus, dignissim malesuada quam sodales et. Quisque aliquet risus orci, quis facilisis augue fermentum in. Sed nec metus quis turpis",
      user_id: 23,
      ingredients: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet",],
      steps: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet",],
      comments: [],
      photos: []
    }
  }


  componentDidMount() {
    const { match: { params: { param } } } = this.props
    console.log(param);
    this.setState({ isLoaded: true })

    // Fake data

    var comment = {
      _id: null,
      comment: "Soy un commentario",
      date: "hoy",
      user_id: 0,
      user: { username: "Anvido" }
    }

    for (var i = 0; i < 10; i++) {
      comment._id = i
      this.state.comments.push(comment)
    }

    document.title = 'title' //Titulo de la receta
  }

  mapList(list) {
    return list.map(
      (item, index) => (<li key={ index } value={ index }>{ item }</li>)
    )
  }

  mapComments(list) {
    return list.map(
      (item) => (
        <li key={ item._id } value={ item._id } className="list-group-item">
          <Comment item={ item }/>
        </li>
      )
    )
  }

  render() {
    const { isLoaded, name, time, difficulty, portions, description, user_id,
            ingredients, steps, comments, photos } = this.state

    var carrouselPhotos = ( photos.length > 0 ) ? (
      <div id="carouselPhotos" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselPhotos" data-slide-to="0" className="active"></li>
          <li data-target="#carouselPhotos" data-slide-to="1"></li>
          <li data-target="#carouselPhotos" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="" alt="First slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="" alt="Second slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="" alt="Third slide"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselPhotos" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselPhotos" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
        </a>
      </div>
    ) : null


    if (isLoaded) {
      return (
        <div className="col-md-8 offset-md-2">
          { carrouselPhotos }
          <div className="row">
            <h1 className="gv-font">{ name }</h1>
          </div>
          <div className="row">
            <i className="material-icons">alarm</i>
            <span className="mr-5">{ time } minutos </span>
            <i className="material-icons">short_text</i>
            <span className="mr-5">{ difficulty } </span>
            <span className="mr-5">{ portions } Porciones</span>
          </div>
          <div className="row mt-3">
            <div className="col-md-2 text-center my-auto">
              <img src={ user_img } alt="una foto" className="w-100 rounded-circle"/>
              <span>Usuario</span>
            </div>
            <div className="col-md-10">
              <p>{ description }</p>
              <span>Conoce más sobre </span>
              <Link to={"/profile/" + user_id }>Usuario</Link>
            </div>
          </div>
          <div className="row d-flex justify-content-center mt-3">
            <button type="button" className="btn btn-outline-primary mr-2">
              Agregar a Favoritos
            </button>
            <button type="button" className="btn btn-outline-primary">
              Agregar a Colecciones
            </button>
          </div>
          <hr/>
          <div className="row">
            <h2 className="gv-font">Ingredientes</h2>
          </div>
          <div className="row">
            <ul>
              { this.mapList(ingredients) }
            </ul>
          </div>
          <div className="row">
            <h2 className="gv-font">Preparación</h2>
          </div>
          <div className="row">
            <ol start="1">
              { this.mapList(steps) }
            </ol>
          </div>
          <hr/>
          <div className="row">
            <CommentCreator />
          </div>
          <div className="row">
            <ul className="list-group w-100">
              { this.mapComments(comments) }
            </ul>
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
