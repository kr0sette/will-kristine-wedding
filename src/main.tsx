import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.tsx'
import navItems from '@/constants/navitems'
import SaveTheDate from '@/page/save-the-date'
import ComingSoon from '@/page/coming-soon'
import AboutUs from '@/page/about-us'

const routeElements: { [key: string]: React.ReactElement } = {
  home: <SaveTheDate />,
  about: <AboutUs />,
  rsvp: <ComingSoon />,
  faqs: <ComingSoon />,
  schedule: <ComingSoon />,
  travel: <ComingSoon />,
  registry: <ComingSoon />
}

const createRoutes = () => {
  return navItems.map(
    (item: {
      value: string,
      to: string,
      index?: boolean
    }) => {
      const{ value, to, index} = item;
        if(index){
          return <Route index element={routeElements[value]} />
        } else {
          return <Route key={value} path={to} element={routeElements[value]} />
        }
    }
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<App />}>
        { createRoutes() }
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
