import React, { Component } from 'react'

// Components
/* import components here*/
import Header from './Header'
import Footer from './Footer'

export default class App extends Component {

  // Verify if token exists and validate it
  sayHello() {
    return 'Juana'
  }

  render() {
    const { children } = this.props
    return (
      <div>
        <Header mensaje={this.sayHello()} />
        <main>
          { children }
        </main>
        <Footer />
      </div>
    )
  }
}
