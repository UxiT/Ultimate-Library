import React, { Component } from 'react'

import Switch from './Switch';

export class Header extends Component {
    render() {
        return (
            <header>
            <Switch/>
            <div className = 'auth'>
                <ul className ='auth-wrap'>
                    <li>
                        <span>
                            <a href = "login">Sign in</a>
                         </span>
                    </li>
                    <li>
                        <span>
                            <a href="register"> Sign up</a>
                        </span>
                    </li>
                </ul>
            </div>          
            </header>
        )
    }
}

export default Header
