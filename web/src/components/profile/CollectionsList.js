import React, { Component } from 'react'

export default class CollectionsList extends Component {
  render() {
    const { collections } = this.props
    const list = collections.map( c =>
      (<a href="#" key={ c.id } className="list-group-item list-group-item-action">
        { c.name }
      </a>)
    )
    return (
      <div className="list-group">
        <a href="#" key={0} className="list-group-item list-group-item-action">
          Crear nueva colección
        </a>
        { list }
      </div>
    )
  }
}
