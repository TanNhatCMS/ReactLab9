import React from 'react'
import { Link } from 'react-router-dom'
import SearchForm from '../SearchForm'
import EmailSearchForm from '../EmailSearchForm'

const Home: React.FC = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <nav
            aria-label="breadcrumb"
            className="bg-body-tertiary rounded-3 p-3 mb-4"
          >
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item active" aria-current="page">
                Home
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <ul className="list-group">
        <li className="list-group-item">
          <h2>Search Form Username & Email</h2>
          <SearchForm />
        </li>
        <li className="list-group-item">
          <h2>Search Form Email</h2>
          <EmailSearchForm />
        </li>
        <li className="list-group-item">
          <Link to="/list-users">List User</Link>
        </li>
      </ul>
    </div>
  )
}
export default Home
