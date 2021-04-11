import React from 'react';
import './agriproduct.styles.css'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function StateCard({ data }) {
  AOS.init();
  return (
    <div data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine">

      <div className="card dib bw3 pa3 flex row mg2 br3 tc">
        <div className='container justify-between'>
      <Link style={{ textDecoration: "none"}} to='/' className="" > 
        <img className="w-16 md:w-32 lg:w-48" src={data.image} alt={data.name} />
        <div>
            <h2 style={{  fontSize: '20px' }} className="sm tc no-underline">{data.name}</h2>
          </div>
        </Link>
        </div>
        </div>
    </div>   
  )
}
