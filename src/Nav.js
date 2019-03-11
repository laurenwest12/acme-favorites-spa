import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <div className="nav nav-pills">
        <div className="nav-item">
            <Link to="/users" className='nav-link'>Users</Link>
        </div>
        <div className="nav-item">
            <Link to="/things" className="nav-link">Things</Link>
        </div>
        </div>
    )
}
export default Nav