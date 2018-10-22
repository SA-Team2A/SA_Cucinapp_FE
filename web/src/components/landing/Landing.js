import React, { Component } from 'react'

// Assets
import landing1 from '../../assets/landing1.jpg'

// Components
/* import components here */

// SASS


export default class Landing extends Component {
  render() {
    return (
      <div className="container-fluid">

        <div className="section">
          <div className="row">
            <div className="gradient"></div>
          <img src={ landing1 } alt="soy una imagen"/>
            <div className="all-center text-center">
              <h1 className="super-big text-white">Cucinapp</h1>
            <h1 className="text-white gv-font">Busca, comparte recetas y blablabla.</h1>
            </div>
          </div>

        </div>

        <div className="section">
          <div className="row">
            <div className="col-md-7">
              <p className='primary-color-text'>soy el objeto de prueba</p>
            </div>
            <div className="col-md-5">
              Imagen
            </div>
          </div>
        </div>

        <hr/>
        <div className="section">
          <div className="row">
            <div className="col-md-5">
              Imagen
            </div>
            <div className="col-md-7">
              <p className='primary-color-text'>soy el objeto de prueba</p>
            </div>
          </div>
        </div>

        <hr/>
        <div className="section">
          <div className="row">
            <div className="col-md-7">
              <p className='primary-color-text'>soy el objeto de prueba</p>
            </div>
            <div className="col-md-5">
              Imagen
            </div>
          </div>
        </div>
      </div>
    )
  }
}
