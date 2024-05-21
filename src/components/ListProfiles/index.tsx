import React from 'react'
import { Link } from 'react-router-dom'
import Info from '../Info'

interface UserProps {
  data: Array<{ id: number; [key: string]: any }>
}

const User: React.FC<UserProps> = ({ data }) => {
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
                List User
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <ul className="list-group">
        {data ? (
          data.map((user, index) => (
            <li className="list-group-item">
              <Info data={user}>
                # {index}
                <Link to={`/user/${user.id}`}> View Profile</Link>
              </Info>
            </li>
          ))
        ) : (
          <div>No user found</div>
        )}
      </ul>
    </>
  )
}

export default User
