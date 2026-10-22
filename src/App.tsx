import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ButtonPage from './pages/ButtonPage'
import ConsolidatedNavigation from './components/ConsolidatedNavigation/ConsolidatedNavigation'
import Home from './pages/Home'
import NavigationPage from './pages/NavigationPage'
import SubBrandCompare from './components/SubBrandNavigation/SubBrandCompare'
import SubBrandNavigation from './components/SubBrandNavigation/SubBrandNavigation'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="button" element={<ButtonPage />} />
        <Route path="navigation" element={<NavigationPage />} />
      </Route>
      <Route path="prototypes/sub-brand-navigation/compare" element={<SubBrandCompare />} />
      <Route path="prototypes/sub-brand-navigation/:variant" element={<SubBrandNavigation />} />
      <Route
        path="prototypes/consolidated-navigation-1"
        element={<ConsolidatedNavigation version={1} />}
      />
      <Route
        path="prototypes/consolidated-navigation-2"
        element={<ConsolidatedNavigation version={2} />}
      />
      <Route
        path="prototypes/consolidated-navigation-3"
        element={<ConsolidatedNavigation version={3} />}
      />
      <Route
        path="prototypes/consolidated-navigation-4"
        element={<ConsolidatedNavigation version={4} />}
      />
      <Route
        path="prototypes/consolidated-navigation-5"
        element={<ConsolidatedNavigation version={5} />}
      />
    </Routes>
  )
}

export default App
