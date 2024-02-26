import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'

export default function HomeTemplate() {
  return (
    <>
      <header>
      <Header />
      </header>
        <Outlet />
      <footer>
      footer
      </footer>
    </>
  )
}
