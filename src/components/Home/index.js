// Write your code here
import {Component} from 'react'
import './index.css'
import Login from './Components/Login'
import Logout from './Components/Logout'
import Message from './Components/Message'

class Home extends Component {
  render() {
    return (
      <div className="bg">
        <div className="cardcontainer">
          <Message />
        </div>
      </div>
    )
  }
}

export default Home
