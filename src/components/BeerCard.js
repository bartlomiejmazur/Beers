import React from 'react'
import {NavLink} from 'react-router-dom'
import {FaSquare} from 'react-icons/fa'

export default function BeerCard({beer}) {
  const {image_url, name, tagline} = beer

  return (
    <NavLink to={`/details/${beer.id}`} className="beer-card">
      <div className="beer-card__container">
        <img src={image_url} alt={`${name} beer `} className="beer-card__img" />
        <h4 className="beer-card__title">
          {name.length > 20 ? name.slice(0, 20) + '...' : name}
        </h4>
        <div className="beer-card__line">
          <div className="beer-card__line-left-line"></div>
          <FaSquare className="beer-card__line-icon" />
          <div className="beer-card__line-right-line"></div>
        </div>
        <p className="beer-card__content">{tagline}</p>
      </div>
    </NavLink>
  )
}
