import React from 'react'
import Link from 'next/link';
import WithAuth from '../components/WithAuth'

function Dashboard(props) {
  console.log(props)
  return (
    <>
      <h1>Dashboard</h1>
      <Link href="/">Home</Link>
    </>
  )
}

export default WithAuth(Dashboard);


Dashboard.getInitialProps = async ({auth, ...ctx}) => {
  console.log('hola from dashboard');
  return{
    name: auth ? 'arfan' : 'guest'
  }
}