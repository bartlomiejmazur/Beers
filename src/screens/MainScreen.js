import React from 'react'
import {client} from '../utils/api-client'
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'

import '../styles/Main.css'

import {useAsync} from '../utils/useAsync'
import {useLocalStorageState} from '../utils/useLocalStorageState'
import BeerCard from '../components/BeerCard'
import CardSkeleton from '../components/CardSkeleton'
import Error from '../components/Error'

const MainScreen = () => {
  const {data, error, run, isError, isSuccess, isLoading} = useAsync()

  const [page, setPage] = useLocalStorageState('page', 1)

  React.useEffect(() => {
    run(client(`beers?page=${page}&per_page=12`))
  }, [page, run])

  return (
    <>
      <main>
        <div className="wrapper">
          {isLoading ? <CardSkeleton cards={12} /> : null}
          {isError ? <Error error={error} /> : null}

          {isSuccess
            ? data?.length
              ? data.map(beer => <BeerCard beer={beer} key={beer.id} />)
              : null
            : null}
        </div>
      </main>

      {isError ? null : isSuccess ? (
        <nav>
          <div className="nav-wrapper">
            {page === 1 ? (
              <button disabled>
                <FaAngleLeft className="nav-left" />
              </button>
            ) : (
              <button onClick={() => setPage(() => page - 1)}>
                <FaAngleLeft className="nav-left" />
              </button>
            )}
            <span>{page}</span>
            <button onClick={() => setPage(() => page + 1)}>
              <FaAngleRight className="nav-right" />
            </button>
          </div>
        </nav>
      ) : null}
    </>
  )
}

export default MainScreen
