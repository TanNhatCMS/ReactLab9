import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchForm: React.FC = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const searchParams = new URLSearchParams()
    if (username) searchParams.append('username', username)
    if (email) searchParams.append('email', email)
    navigate(`/tim-kiem?${searchParams.toString()}`)
  }

  return (
    <div className="card mb-4">
      <div className="card-body text-center">
        <form onSubmit={handleSubmit} className="form-inline">
          <div className="form-group mr-2">
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group mr-2">
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
      </div>
    </div>
  )
}

export default SearchForm
