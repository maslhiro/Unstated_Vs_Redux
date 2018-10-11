import React, { Component } from 'react'
import { Subscribe } from 'unstated';
import UserContainer from '../stores'
class Mana extends Component {
    render () {
        return (
            <Subscribe to={[UserContainer]}>
            {user => (
            <div>
                <h3>Mana</h3>
                <h3>{ JSON.stringify(user.state.isLog_In)}</h3>
            </div>
            )}
            </Subscribe>
        )
    }
}

export default Mana