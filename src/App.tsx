import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ButtonPage from './pages/ButtonPage'
import ConsolidatedNavigation from './components/ConsolidatedNavigation/ConsolidatedNavigation'
import Home from './pages/Home'
import SubBrandNavigation from './components/SubBrandNavigation/SubBrandNavigation'
import SubBrandNavigation7 from './components/SubBrandNavigation7/SubBrandNavigation7'
import SubBrandNavigation8A from './components/SubBrandNavigation8A/SubBrandNavigation8A'
import SubBrandNavigation8B from './components/SubBrandNavigation8B/SubBrandNavigation8B'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="button" element={<ButtonPage />} />
      </Route>
      <Route path="prototypes/sub-brand-navigation" element={<SubBrandNavigation />} />
      <Route path="prototypes/sub-brand-navigation/*" element={<Navigate to="/prototypes/sub-brand-navigation" replace />} />
      <Route path="prototypes/consolidated-navigation-7" element={<SubBrandNavigation7 />} />
      <Route path="prototypes/consolidated-navigation-7/*" element={<Navigate to="/prototypes/consolidated-navigation-7" replace />} />
      <Route path="prototypes/consolidated-navigation-8a" element={<SubBrandNavigation8A />} />
      <Route path="prototypes/consolidated-navigation-8a/*" element={<Navigate to="/prototypes/consolidated-navigation-8a" replace />} />
      <Route path="prototypes/consolidated-navigation-8b" element={<SubBrandNavigation8B />} />
      <Route path="prototypes/consolidated-navigation-8b/*" element={<Navigate to="/prototypes/consolidated-navigation-8b" replace />} />
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
