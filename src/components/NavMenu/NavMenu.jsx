import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'
import '../NavMenu/navMenu.scss'

export class NavMenu extends Component {
  showSettings(event) {
    event.preventDefault()
  }
  render() {
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">
          Space Station Daily News
        </a>
        <a id="about" className="menu-item" href="/page">
          Satellite News
        </a>
        <a id="contact" className="menu-item" href="/page2">
          General Reports
        </a>
        {/* <a onClick={this.showSettings} className="menu-item--small" href="">
          Settings
        </a> */}
      </Menu>
    )
  }
}
