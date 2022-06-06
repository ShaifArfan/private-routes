import '@picocss/pico'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Login from './pages/Login'
import PrivateRoute from './components/PrivateRoute'

function App() {

  // #way-1
  // return (
  //   <Routes>
  //     <Route path="/" element={<Home />}></Route>
  //     <Route path="/dashboard" element={
  //       <PrivateRoute>
  //         <Dashboard />
  //       </PrivateRoute>
  //     }></Route>
  //     <Route path="/login" element={<Login />}></Route>
  //   </Routes>
  // )

  // #way-2
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route element={<PrivateRoute/>}>
        <Route path='/dashboard' element={<Dashboard />} />
      </Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  )

}

export default App
