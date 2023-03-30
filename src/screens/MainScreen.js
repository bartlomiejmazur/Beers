import React from 'react'
import {client} from '../utils/api-client'
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'

import '../styles/Main.css'
import '../styles/Nav.css'

import {useAsync} from '../utils/hooks'
import BeerCard from '../components/BeerCard'

const MainScreen = () => {
  const {data, error, run, isLoading, isError, isSuccess} = useAsync()

  const [page, setPage] = React.useState(1)

  React.useEffect(() => {
    run(client(`beers?page=${page}&per_page=12`))
  }, [page, run])

  return (
    <>
      <main>
        <div className="wrapper">
          {isError ? (
            <div>
              <p>There was an error:</p>
              <pre>{error.message}</pre>
            </div>
          ) : null}

          {isSuccess ? (
            data?.length ? (
              data.map(beer => <BeerCard beer={beer} key={beer.id} />)
            ) : (
              <p>Go back to first page</p>
            )
          ) : null}
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
