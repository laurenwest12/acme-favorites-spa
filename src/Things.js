import React, {Component} from 'react'
import axios from 'axios'

export default class Things extends Component {
    constructor() {
        super() 
        this.state = {
            things: []
        }
    }

    componentDidMount () {
        axios.get('/api/things')
        .then(response => this.setState({things: response.data}))
        .catch(e => console.log(e))
    }

    render () {
        const things = this.state.things
        return (
           <div>
               <ul>
               {
                   things.map(thing => (
                       <li key = {thing.id}>{thing.name}
                       <ul>
                           {thing.favorites.map((favorite) => (
                               <li key = {favorite.user.id}>
                                   favorited by: {favorite.user.name}
                               </li>
                           ))}
                       </ul>
                       </li>
                   ))
               }
               </ul>
           </div>
        )
    }
}