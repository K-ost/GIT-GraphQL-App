import { useState } from 'react'
import { useNavigate } from 'react-router'
import Header from './components/Header'
import Layout from './components/Layout'
import Search from './components/Search'

function App() {
  const [login, setLogin] = useState<string>('K-ost')
  const nav = useNavigate()
  
  // searchFunc
  const searchFunc = (e: any, value: string) => {
    e.preventDefault()
    setLogin(value)
    nav('/')
  }

  return (
    <div className="App">
      <Header />

      <div className="container">
        <Search handler={searchFunc} />
        <Layout login={login} />
      </div>
    </div>
  )
}

export default App
