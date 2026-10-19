import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ButtonPage from './pages/ButtonPage'
import ConsolidatedNavigation from './components/ConsolidatedNavigation/ConsolidatedNavigation'
import Home from './pages/Home'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="button" element={<ButtonPage />} />
      </Route>
      <Route
        path="prototypes/consolidated-navigation-1"
        element={<ConsolidatedNavigation version={1} />}
      />
      <Route
        path="prototypes/consolidated-navigation-2"
        element={<ConsolidatedNavigation version={2} />}
      />
    </Routes>
  )
}

export default App
