import { useState } from 'react'
import Background from './components/Background'


function App() {

  const [search , setSearch] = useState(0)

  return (
    <>
    <Background search={search} setSearch={setSearch}/>
    </>
  )
}

export default App
