import React from 'react'
import {useParams} from 'react-router'
import {useAsync} from '../utils/hooks'

import '../styles/BeerScreen.css'
import {client} from '../utils/api-client'
import PageSkeleton from '../components/PageSkeleton'

export default function BeerScreen() {
  const {beerId} = useParams()
  const {data, isSuccess, run} = useAsync()

  React.useEffect(() => {
    run(client(`beers/${beerId}`))
  }, [run, beerId])

  return (
    <section>
      {isSuccess ? (
        data.map(beer => (
          <>
            <div className="product">
              <img src={beer.image_url} alt="" className="product__image" />
              <div className="product__content">
                <h4 className="product__name">{beer.name}</h4>
                <h5 className="product__tagline">{beer.tagline}</h5>
                <p className="product__description">{beer.description}</p>
                <div className="product__wrapper">
                  <div className="product__abv">ABV:{` ${beer.abv}`}</div>
                  <div className="product__abv">
                    IBU:
                    {` ${beer.ibu}`}
                  </div>
                </div>
              </div>
            </div>
            <div className="product__ingrendients">
              <div className="product__ingrendients-name">Ingredients</div>
              <div className="product__ingredients-wrapper">
                <div>
                  <div className="product__ingrendients-subname">Malt</div>
                  {beer.ingredients.malt.map(el => (
                    <p>{`${el.name}: ${el.amount.value} ${el.amount.unit}`} </p>
                  ))}
                </div>
                <div className="product__ingrendients-line"></div>
                <div>
                  <div className="product__ingrendients-subname">Hops</div>
                  {beer.ingredients.hops.map(el => (
                    <p>{`${el.name}: ${el.amount.value} ${el.amount.unit}`} </p>
                  ))}
                </div>
              </div>
            </div>
          </>
        ))
      ) : (
        <PageSkeleton />
      )}
    </section>
  )
}
