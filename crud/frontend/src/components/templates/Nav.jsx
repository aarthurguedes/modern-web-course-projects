import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/* Aqui poderia ser criado um componente (reúso) */}
            <Link to="/">
                <i className="fa fa-home"></i> Home
            </Link>
            <Link to="/users">
                <i className="fa fa-users"></i> Users
            </Link>
        </nav>
    </aside>