import Navigation from '@/components/custom/navigation'
import { Outlet } from 'react-router'

function App() {

  return (
    <div className="app-container h-screen w-screen">
      <Navigation />
      <Outlet />
    </div>
  )
}

export default App
