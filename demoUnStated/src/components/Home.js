import React, { Component } from 'react'
import { Subscribe } from 'unstated';
import UserContainer from '../stores'
class Home extends Component {
    getSession_Storage = () =>{
        let isLog_In = localStorage.getItem('Is_Log_In')
        console.log("SES",isLog_In)  
        alert(isLog_In)
    }

    render () {
        return (
            <Subscribe to={[UserContainer]}>
            {user => (
            <div>
                <h3>Home</h3>
                <h3> Is Log In : { JSON.stringify(user.state.isLog_In)}</h3>
                <button onClick={()=>this.getSession_Storage()}>Get Session Storage</button>

            </div>


            )}
            </Subscribe>
        )
    }
}

export default Home