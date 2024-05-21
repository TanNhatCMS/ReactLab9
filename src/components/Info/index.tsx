import React from 'react'

const Info = ({ children, data }) => {
  return (
    <ul className="list-group">
      <li className="list-group-item">{children}</li>
      <li className="list-group-item">
        <div className="row">
          <div className="col-sm-3">
            <p className="mb-0">ID</p>
          </div>
          <div className="col-sm-9">
            <p className="text-muted mb-0">{data.id}</p>
          </div>
        </div>
      </li>
      <li className="list-group-item">
        <div className="row">
          <div className="col-sm-3">
            <p className="mb-0">Name</p>
          </div>
          <div className="col-sm-9">
            <p className="text-muted mb-0">{data.name}</p>
          </div>
        </div>
      </li>
      <li className="list-group-item">
        <div className="row">
          <div className="col-sm-3">
            <p className="mb-0">Username</p>
          </div>
          <div className="col-sm-9">
            <p className="text-muted mb-0">{data.username}</p>
          </div>
        </div>
      </li>
      <li className="list-group-item">
        <div className="row">
          <div className="col-sm-3">
            <p className="mb-0">Email</p>
          </div>
          <div className="col-sm-9">
            <p className="text-muted mb-0">{data.email}</p>
          </div>
        </div>
      </li>
    </ul>
  )
}

export default Info
