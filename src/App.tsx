import { useState } from 'react'
import './App.css'
import SaveTheDate from '@/page/save-the-date'
import Navigation from '@/components/ui/navigation'

function App() {
  const [_count, _setCount] = useState(0)

  return (
    <>
      <Navigation />
      <div className="app-container flex flex-col items-center justify-center h-screen">
        <SaveTheDate />
      </div>
    </>

  )
}

export default App
