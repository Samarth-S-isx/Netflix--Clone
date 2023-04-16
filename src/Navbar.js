import React, { useState,useEffect } from 'react'
import './Navbar.css'

function Navbar() {
    const [show,handleShow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if (window.scrollY>100){
                handleShow(true);
            }else handleShow(false)
        })
        return()=>{
            window.removeEventListener("scroll")
        }
    }, []);
    return (
        <div className={`navbar ${show && "nav-black"}`}>
            <img className="nav-logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"/>
            <img className="nav-avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"/>
        </div>
    )
}

export default Navbar
