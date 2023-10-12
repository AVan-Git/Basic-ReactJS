import React from 'react'
import { Outlet } from 'react-router-dom'

export default function HomeTemplate() {
  return (
    <>
      <header>
      header
      </header>
        <Outlet />
      <footer>
      footer
      </footer>
    </>
  )
}
