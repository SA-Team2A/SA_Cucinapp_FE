import React from 'react'

// Assets
import user_img from '../../assets/user.svg'

// Components
import { Link } from 'react-router-dom'

export default ({ item }) => {
  const { comment, date, user_id } = item
  // const { username } = user
  console.log(item);

  return (
    <div className="row">
      <div className="col-md-1 my-auto">
        <img src={ user_img } alt="una foto" className="w-100 rounded-circle"/>
      </div>
      <div className="col-md-11">
        <Link to={"/profile/" + user_id }>Nombre del individuo</Link>
        <br/>
        <small>{ date }</small>
        <p>{ comment }</p>
      </div>
    </div>
  )
}
