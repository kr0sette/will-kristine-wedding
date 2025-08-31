import Navigation from '@/components/custom/navigation'
import { Outlet } from 'react-router'

function App() {

  return (
    <div className="app-container h-fit w-fit">
      <Navigation />
      <Outlet />
    </div>
  )
}

export default App
