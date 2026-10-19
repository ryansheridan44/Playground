import { Link } from 'react-router-dom'
import Button from '../components/Button'

function ButtonPage() {
  return (
    <section className="section">
      <div className="container">
        <Link to="/" className="back">
          ← Back
        </Link>
        <h1 className="page-title">Button</h1>
        <p className="page-subtitle">Click it to test.</p>
        <div className="demo">
          <Button onClick={() => alert('Button works!')}>Test button</Button>
        </div>
      </div>
    </section>
  )
}

export default ButtonPage
