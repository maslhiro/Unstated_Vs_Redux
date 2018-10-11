import React, { Component } from 'react'
import { connect } from 'react-redux'

class Mana extends Component {
    render () {
        const { isLog_In } = this.props;

        return (
         
            <div>
                <h3>Mana</h3>
                <h3>IS Log In {JSON.stringify(isLog_In)}</h3>

            </div>
          
        )
    }
}

export default connect(
    state =>{
        console.log("Mana", state.isLog_In)
        return {
            isLog_In : state.isLog_In
        }
    }
  )(Mana);