import React from 'react'
import './Header.scss'
import Logo from '../../assets/logo.png'


function Header() {
    return (
        <section id='headerNavbar'>
            <div className="container">
                <div className="row">
                    <div className="myNavbar">
                        <div className="logo">
                            <img src={Logo} alt="" />
                        </div>
                        <div className="myNavItem">
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Pages</li>
                                <li>News</li>
                                <li>Contact</li>
                                <li>Shop</li>
                            </ul>
                        </div>
                        <div className="rightPanel">
                            <i className="bi bi-cart-fill"></i>
                            <i className="bi bi-search"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header