import React from 'react'
import { NavLink } from 'react-router-dom'
import HOCModel from '../HOC/HOCModel'

export default function AdminTemplate(props) {
  return (
    <div>
      <HOCModel />
      <div className="d-flex">
        <div className="dashboard w-25 bg-dark " style={{minHeight:'100vh'}}>
            <img src="https://i.pravatar.cc/?u=2" alt="..." width={50} height={50} />
            <nav className='mt-5'>
                <NavLink to="/admin/products">Product management</NavLink> <br />
                <NavLink to="/admin/users">User management</NavLink>
            </nav>
        </div>
        <div className="component-content w-75">
            <props.Compoment />
        </div>
      </div>
    </div>
  )
}
