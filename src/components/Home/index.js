import {Component} from 'react'

import LogoutButton from '../LogoutButton'
import Header from '../Header'

import './index.css'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Home Route</h1>
        <LogoutButton />
      </div>
    )
  }
}

export default Home
