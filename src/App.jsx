import { useState } from 'react'
import { RouterProvider } from 'react-router'
import { router } from './routes/router'
import './common/styles/global.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <RouterProvider router={router} />
  )
}

export default App
