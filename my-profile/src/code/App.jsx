import { useState } from 'react'
import '../style/App.css'
import bgHome from '../assets/bg.jpeg'
import prof from '../assets/prof.jpeg'

function App() {

  return (
    <>
      <section id='sec_1'>

        <div className='home'>
          <div className="bgdiv">
            <img className='bg_home' src={bgHome}></img>
          </div>

        <div className="profdiv">
          <div className="profdiv_ div_img">
            <img className='profImg' src={prof}></img>
          </div>
          <div className="profdiv_ div_info">
            <div className="info_hldr name_">Sav Ducusin</div>
            <div className="info_hldr cap">Everything happens for a reason.</div>
            <div className="info_hldr odr_dt">
              <span className="odr_dt_con">
                <img className='icon_' src='image.jpeg'></img> San Fernando City, La Union
              </span>
              <span className="odr_dt_con">
                <img className='icon_' src='image.jpeg'></img> DMMMMSU-MLUC
              </span>
              <span className="odr_dt_con">
                <img className='icon_' src='image.jpeg'></img> @sav.ducusin
              </span>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  )
}

export default App
