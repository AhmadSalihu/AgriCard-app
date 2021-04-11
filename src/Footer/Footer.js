import React from 'react'
import './footer.styles.css'
import { useLocation } from 'react-router-dom'

function Footer() {
  const location = useLocation()
  return (
    <>
      {location.pathname === '/' && (
      <footer className="tc-l bg-center cover bg-black">
        <div className='tc h1 tx '>
          <h2 className='h1 text-sm'>Prospective Partners</h2>
        </div>
  <div className="w-100 ph3 pv5 bg-black-80">
    <a className="link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2" href="/#" title="BOA">
            <img className="dib h2 w2" src="/logoimages/boa.jpg" alt="" />
    </a>
    <a className="link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2" href="/#" title="Unity Bank">
      <img className="dib h2 w2"  src="/logoimages/unitybank.png" alt="" />
    </a>
    <a className="link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2" href="/#" title="NIRSAL">
      <img className="dib h2 w2" src="/logoimages/nirsal.jpg" alt="" />
    </a>
    <a className="link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2" href="/#" title="Maize Farmers Ass.">
     <img className="dib h2 w2"  src="/logoimages/maize.ass.jpg" alt="" />
    </a>
    <a className="link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2" href="/#" title="PAN">
     <img className="dib h2 w2"  src="/logoimages/pan.jpg" alt="" />
    </a>
    <a className="link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2" href="/#" title="NAIC">
      <img className="dib h2 w2" src="/logoimages/NAIC.jpg" alt="" />
    </a>
    <a className="link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2" href="/#" title="Notore">
     <img className="dib h2 w2" src="/logoimages/notore.png" alt="" />
    
    </a>
    <a className="link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2" href="/#" title="RIFAN">
      <img className="dib h2 w2" src="/logoimages/rifan-logo.png" alt="" />
    </a>
    <a className="link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2" href="/#" title="SWOFON.">
      <img className="dib h2 w2" src="/logoimages/WOMEN FARMERS.JPG" alt="" />
    </a>
    <a className="link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2" href="/#" title="YFAN">
      <img className="dib h2 w2" src="/logoimages/YONUG FARMERS.png" alt="" />
    </a>
      <a className="link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2" href="/#" title="SOFAN">
      <img className="dib h2 w2" src="/logoimages/SOYA BEAM FARMERS.jpg" alt="" />
      </a>
        <a className="link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2" href="/#" title="NFAN">
      <img className="dib h2 w2" src="/logoimages/NFAN.jpg" alt="" />
      </a>
        <a className="link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2" href="/#" title="ALL IN ONE Farmers Ass.">
      <img className="dib h2 w2" src="/logoimages/ALL IN ONE.Jpg" alt="" />
      </a>
        <a className="link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2" href="/#" title="CAFAN">
      <img className="dib h2 w2" src="/logoimages/CAT FISH FARMERS.Jpg" alt="" />
     </a>
      <a className="link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2" href="/#" title="Ass. of Grain Processors">
      <img className="dib h2 w2" src="/logoimages/GRAIN PROC LOGO.JPG" alt="" />
      </a>
     <a className="link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2" href="/#" title="AFAN">
      <img className="dib h2 w2" src="/logoimages/AFAN LOGO.png" alt="" />
      </a>
     <a className="link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2" href="/#" title="MACBAN">
      <img className="dib h2 w2" src="/logoimages/MIYETTI.jpg" alt="" />
    </a>
        </div>
      <div className="h2"> &copy; Copyright 2021 AgriCard</div>
        </footer>
      )}
    </>
    )
}

export default Footer