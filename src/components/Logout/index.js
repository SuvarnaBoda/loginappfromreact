// Write your code here
import {Component} from 'react'
import './index.css'

class Logout extends Component {
  render() {
    return (
      <button type="button" className="but" onClick={this.logout}>
        Logout
      </button>
    )
  }
}

export default Logout
