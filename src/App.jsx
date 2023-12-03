import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="outer-box">
      <div className="box1">

      <div className="childbox1">

      <p className="month">FREE</p>
      <h1 className="month">$0/month</h1>
      <hr/>
      <ul className="scroll-container">
            <li>✓ Single User</li>
            <li>✓ 50GB Storage</li>
            <li>✓ Unlimited Public Projects</li>
            <li>✓ Community Access</li>
            <li>× Unlimited Private Projects</li>
            <li>× Dedicated Phone Support</li>
            <li>× Free Subdomain</li>
            <li>× Monthly Status Reports</li>
          </ul>
          <button>BUTTON</button>
</div>
      </div>

  {/* box = 2 */}

  <div className="price-cart">

<div className="childbox1">

<p className="month">PLUS</p>
<h1 className="month">$9/month</h1>
<hr/>
<ul className="scroll-container">
      <li>✓ Single User</li>
      <li>✓ 50GB Storage</li>
      <li>✓ Unlimited Public Projects</li>
      <li>✓ Community Access</li>
      <li>× Unlimited Private Projects</li>
      <li>× Dedicated Phone Support</li>
      <li>× Free Subdomain</li>
      <li>× Monthly Status Reports</li>
    </ul>
    <button>BUTTON</button>
</div>
</div>

{/* box = 3 */}

<div className="price-cart">

<div className="childbox1">

<p className="month">PRO</p>
<h1 className="month">$49/month</h1>
<hr/>
<ul className="scroll-container">
      <li>✓ Single User</li>
      <li>✓ 50GB Storage</li>
      <li>✓ Unlimited Public Projects</li>
      <li>✓ Community Access</li>
      <li>× Unlimited Private Projects</li>
      <li>× Dedicated Phone Support</li>
      <li>× Free Subdomain</li>
      <li>× Monthly Status Reports</li>
    </ul>
    <button>BUTTON</button>
</div>
</div>
</div>

    </>
  )
}

export default App
