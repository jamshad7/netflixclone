import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className='Navbar'>
    <div className='logodiv'><Link to="/"><img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="logo" /></Link>
    </div>
    <div style={{marginLeft:"10rem",display:"flex",width:"100%"}}>
    <div className='logoDiv'>
      <h4 style={{padding:"20px"}}>Home</h4>
    </div>
    <div className='logoDiv'>
      <h4 style={{padding:"20px"}}>TV Shows</h4>
    </div>
    <div className='logoDiv'>
      <h4 style={{padding:"20px"}}>Movies</h4>
    </div>
    </div>
    <div>
      <img className='avatar'src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />
      </div>
    </div>
  )
}

export default Navbar