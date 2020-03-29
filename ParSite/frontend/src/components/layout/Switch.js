import React, { Component } from 'react'

export class Switch extends Component {
    render() {
        return (
            <div className="Dark-mode">
                <span>Dark mode</span>
                <label className="checkbox">
                    <input type="checkbox"/>
                    <span className="trigger"></span>
                </label>
            </div>
        )
    }
}

export default Switch
