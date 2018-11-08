import React from 'react'

export default ({ recipe }) => {
  const { name, photos, description } = recipe
  return (
    <div className="card recipe ">
      <img className="card-img-top" src={ photos[0] } alt="recipeImage"/>
      <div className="card-body">
        <h5 className="card-title">{ name }</h5>
        <div className="card-text text-truncate">{ description }</div>
      </div>
    </div>
  )
}
