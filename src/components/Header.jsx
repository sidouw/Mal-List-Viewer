import React from 'react'
import { Link} from 'react-router-dom'
const Header = ()=>(
    <div>
    <header>
    <div className = 'container'>
    <Link  className = 'header__title' to ='/'>
    <h1 >Mal List Viewer</h1>
    </Link>
    </div>
    </header>
    </div>
)

export default Header