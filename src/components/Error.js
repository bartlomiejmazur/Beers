import iconError from '../assets/error-svgrepo-com.svg'
import '../styles/Error.css'

export default function Error({error}) {
  return (
    <div className="error-container">
      <p className="error-title">There was an error:</p>
      <p className="error-info">
        {error.message} status {error.statusCode}
      </p>
      <img src={iconError} alt="error page" className="error-img" />
    </div>
  )
}
