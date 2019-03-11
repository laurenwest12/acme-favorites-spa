import React, {Component} from 'react'
import axios from 'axios'

export default class Users extends Component {
    constructor() {
        super() 
        this.state = {
            users: []
        }
    }

    componentDidMount () {
        axios.get('/api/users')
        .then(response => this.setState({users: response.data}))
        .catch(e => console.log(e))
    }

    render () {
        const users = this.state.users.sort()
        
        const userNames = this.state.users.map(user => (user.name)).sort()
        console.log(userNames)
        return (
           <div>
               <ul>
               {
                   users.map(user => (
                       <li key = {user.id}>{user.name}
                        <ul>
                            {
                                user.favorites.map(favorite => (
                                    <li key = {favorite.thing.id}>
                                        {favorite.thing.name} (Ranked: {favorite.rank})
                                    </li>
                                ))
                            }
                        </ul>
                       </li>
                   ))
               }
               </ul>
           </div>
        )
    }
}