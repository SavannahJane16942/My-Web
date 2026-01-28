import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id='sec_1'>
        <div className='home'>
          <div className="hdiv left_div"></div>
          <div className="hdiv mid_div"></div>
          <div className="hdiv right_div"></div>
        </div>
      </section>
    </>
  )
}

export default App
