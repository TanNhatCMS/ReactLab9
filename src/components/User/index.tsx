import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Info from '../Info'
import { UserProps } from '../../utils/types'

const User: React.FC<UserProps> = ({ data }) => {
  const [id, setId] = useState<number | null>(null)
  const params = useParams<{ id?: string }>()

  useEffect(() => {
    if (params.id) {
      setId(Number(params.id))
    }
  }, [params.id])

  const user = data.find((user) => user.id === id)

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
              <li className="breadcrumb-item">
                <Link to="/list-users">List User</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                User Profile
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {user ? (
        <Info data={user}>
          <b>Infomations of User</b>
        </Info>
      ) : (
        <h1>No User found</h1>
      )}
    </>
  )
}

export default User
