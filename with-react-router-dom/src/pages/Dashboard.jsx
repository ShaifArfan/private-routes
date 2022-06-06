import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  console.log('hola from dashboard route');
  return (
    <>
      <h1>Dashboard</h1>
      <Link to='/'>Home</Link>
    </>
  )
}

export default Dashboard