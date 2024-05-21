import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { UserProps } from '../../utils/types'
import Info from '../Info'
import SearchForm from '../SearchForm'

const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}
const Search: React.FC<UserProps> = ({ data }) => {
  const query = useQuery()
  const username = query.get('username') || ''
  const email = query.get('email') || ''
  const filteredData = data.filter((profile) => {
    const matchesUsername = username
      ? profile.username.includes(username)
      : true
    const matchesEmail = email ? profile.email.includes(email) : true
    return matchesUsername && matchesEmail
  })
  let title = ''
  if (username === '' && email === '') {
    title = 'All User'
  } else if (username !== '' && email === '') {
    title = `User Name ${username}`
  } else if (username === '' && email !== '') {
    title = `Email ${email}`
  } else if (username !== '' && email !== '') {
    title = `User Name ${username} & Email ${email}`
  } else {
    title = 'Search User'
  }

  return (
    <>
      <div className="row">
        <div className="col">
          <nav
            aria-label="breadcrumb"
            className="bg-body-tertiary rounded-3 p-3 mb-4"
          >
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Search User
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <SearchForm />
      <h1 className="mb-4">Search Results for {title} </h1>
      <ul className="list-group">
        {filteredData.length > 0 ? (
          filteredData.map((user, index) => (
            <li className="list-group-item">
              <Info data={user}>
                # {index}
                <Link to={`/user/${user.id}`}> View Profile</Link>
              </Info>
            </li>
          ))
        ) : (
          <li className="list-group-item">No user found</li>
        )}
      </ul>
    </>
  )
}

export default Search
