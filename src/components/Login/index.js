// Write your code here

import './index.css'
import {Component} from 'react'

class Login extends Component {
  render() {
    return (
      <button type="button" className="but" onClick={this.login}>
        Login
      </button>
    )
  }
}

export default Login
