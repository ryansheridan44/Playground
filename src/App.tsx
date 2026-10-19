import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ButtonPage from './pages/ButtonPage'
import ConsolidatedNavigationPage from './pages/ConsolidatedNavigationPage'
import Home from './pages/Home'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="button" element={<ButtonPage />} />
      </Route>
      <Route path="prototypes/consolidated-navigation" element={<ConsolidatedNavigationPage />} />
    </Routes>
  )
}

export default App
