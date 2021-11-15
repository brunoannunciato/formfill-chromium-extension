import React from 'react'
import logoImage from './logo.png'

import './header.scss'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <div className="logo__wrapper">
            <img src={ logoImage } className="logo__image"/>
          </div>

          <h1 className="logo__title">
            formfill
          </h1>
        </div>
      </div>
    </header>
  )
}

export default Header