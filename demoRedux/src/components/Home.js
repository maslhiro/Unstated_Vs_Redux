import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
    render () {
        const { isLog_In } = this.props;

        return (
         
            <div>
                <h3>Home</h3>
                <h3>IS Log In {JSON.stringify(isLog_In)}</h3>

            </div>
          
        )
    }
}

export default connect(
    state =>{
        console.log("HOME", state.isLog_In)
        return {
            isLog_In : state.isLog_In
        }
    }
  )(Home);