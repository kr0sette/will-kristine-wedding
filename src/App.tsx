import Navigation from '@/components/custom/navigation'
import { Outlet } from 'react-router'

function App() {

  return (
    <div className="app-container h-fit w-screen">
      <Navigation />
      <div className="flex flex-col items-center justify-center pb-15">
        <div className="max-w-[704px]">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default App
