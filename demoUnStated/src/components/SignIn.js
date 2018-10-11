import React, { Component } from 'react'
import { Subscribe } from 'unstated';
import UserContainer from '../stores'
class SignIn extends Component {

    onPress_btnDang_Nhap = () => {
        alert("Vinn")
    }

    setSession_Storage = (val) => {
        localStorage.setItem('Is_Log_In',val)
        console.log("Sign In")
    }

    render () {
        return (
            <Subscribe to={[UserContainer]}>
            {user => (
                    <div>
                        <h3>Sign In</h3>
                        <h3>Is Log In : { JSON.stringify(user.state.isLog_In)}</h3>
                        <button onClick={()=>user.setDang_Nhap(true)}>Đăng Nhâp</button>
                        <br/>
                        <button onClick={()=>this.setSession_Storage(user.state.isLog_In)}>Session Storage</button>
                    </div>
            )}
            </Subscribe>
        )
    }
}

export default SignIn