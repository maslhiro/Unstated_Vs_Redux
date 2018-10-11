import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setLogIn } from '../actions/UsersAction'

class SignIn extends Component {

    onPress_btnDang_Nhap = () => {
        alert("Vinn")
    }

    render () {
        const { onSet_Log_In } = this.props;
        const { isLog_In } = this.props;

        return (
           
            <div>
                <h3>Sign In</h3>
                <h3>IS Log In {JSON.stringify(isLog_In)}</h3>
                <button onClick={()=>onSet_Log_In(true)}>Đăng Nhâp</button>
            </div>
          
        )
    }
}
export default connect(
    state =>{
        console.log("SIGN IN ", state.isLog_In)
        return {
            isLog_In : state.isLog_In
        }
    },
    dispatch => {
      return {
        onSet_Log_In : (bool) => dispatch(setLogIn(bool))
      }
    }
  )(SignIn);