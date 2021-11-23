import React from 'react'
import './Navbar.css'

export const Navbar = ( {isScrolling} ) => {

    const toTheTop = () => {
        window.scrollTo({ top: 0, left:0, behavior: 'smooth' })
    }

    return (
        <nav className={`navbar ${isScrolling > 20 ? 'scrolling': null}`}>
            <div className={`${isScrolling > 20 ? 'navbar-logo': null}`} onClick={toTheTop}>
                {`<Inicio />`}
            </div>
        </nav>
    )
}


