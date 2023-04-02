import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import '../styles/Main.css'

export default function CardSkeleton({cards}) {
  return Array(cards)
    .fill(0)
    .map(item => (
      <div className="beer-card">
        <div className="beer-card__container ">
          <div className="beer-card__img ">
            <Skeleton width={200} height={300} />
          </div>
          <div className="beer-card__title">
            <Skeleton count={3} width={200} style={{marginBottom: '1rem'}} />
          </div>
        </div>
      </div>
    ))
}
