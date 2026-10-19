import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <header className="header">
        <div className="container">
          <Link to="/" className="brand">
            playground
          </Link>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout
