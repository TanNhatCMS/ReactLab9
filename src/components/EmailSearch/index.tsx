// src/components/EmailSearchResults.tsx
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { UserProps } from '../../utils/types'
import Info from '../Info'
import EmailSearchForm from '../EmailSearchForm'

const EmailSearchResults: React.FC<UserProps> = ({ data }) => {
  const { email } = useParams<{ email: string }>()

  const filteredData = data.filter((profile) => profile.email.includes(email))

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
                Search Email User
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <EmailSearchForm />
      <h1 className="mb-4">Search Results for Email: {email} </h1>
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

export default EmailSearchResults
