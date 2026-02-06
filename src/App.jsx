import { useState } from 'react'
import LoginPage from './loginPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoginPage></LoginPage>
    </>
  )
}

export default App
