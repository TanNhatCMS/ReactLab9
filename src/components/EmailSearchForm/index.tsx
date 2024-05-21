import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const EmailSearchForm: React.FC = () => {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (email) {
      navigate(`/email/${email}`)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form-inline">
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
        Search by Email
      </button>
    </form>
  )
}

export default EmailSearchForm
