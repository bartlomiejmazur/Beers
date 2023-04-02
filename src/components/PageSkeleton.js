import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function PageSkeleton() {
  return (
    <>
      <div className="product">
        <div className="product__image">
          <Skeleton width={250} height={350} />
        </div>
        <div className="product__content">
          <Skeleton count={8} style={{marginBottom: '1rem'}} />
        </div>
      </div>
      <div className="product__ingrendients">
        <div className="product__ingrendients-name">Ingredients</div>
        <div className="product__ingredients-wrapper">
          <div className="product__ingrendients-subname">
            <Skeleton count={6} width={200} />
          </div>
          <div className="product__ingrendients-line"></div>
          <div className="product__ingrendients-subname">
            <Skeleton count={6} width={200} />
          </div>
        </div>
      </div>
    </>
  )
}
