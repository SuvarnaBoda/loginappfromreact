// Write your code here
import {Component} from 'react'
import './index.css'
import Login from './Components'
import Logout from './Components'

class Message extends Component {
    const {login,logout}=props
    state={
        login:true,
       
        logout:false,
    }
   login=()=>{
        this.setState((prev)=>({
                login:!prev.login
        })
            
        )
    }
    logout=()=>{
        this.setState((prev)=>({
            logout:!prev.logout
        }))
    }
       render(){
           const {login,logout}=this.state
           let  head="Please Login"
           if(login){
               head="Please Login"
           }
           else if (logout){
                head="Welcome User"
           }
           return (
               <h1>{head}</h1>
               {login && <Login />}
               {logout && <Logout/>}
           )
       }
}

export default Message