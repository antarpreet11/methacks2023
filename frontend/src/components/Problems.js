import React from 'react'
import "./Problems.css";

import logo from './logo.png'
import dashboard from './dashboard.png'
import practice from './practice.png'
import premium from './premium.png'
import profile from './adam.png'

const Problems = () => {
  const timeLimit = 180000; // 3 minutes
  return (
    <div>
      <div class="sidenav">
        <div class="row">
          <img class="logo" src={logo} alt="Logo" />
          <a href="#home">uPrep</a>
        </div>
        <hr></hr>

        <div class="row">
          <img class="image" src={dashboard} alt="Dashboard" />
          <a href="#dashboard">Dashboard</a>
        </div>
        <div class="row">
          <img class="image" src={practice} alt="Practice" />
          <a href="#practice">Practice</a>
        </div>
        <div class="row">
          <img class="image" src={premium} alt="Premium" />
          <a href="#premium">Premium</a>
        </div>

        <div class="sidenav-profile">
          <div class="row">
            <img class="image" src={profile} alt="Profile Picture" />
            <a href="#profile">Adam M.</a>
          </div>
        </div>
      </div>

      <div class="main">
        <h1>Weekly Problems</h1>
      </div>

    </div>
  )
}

export default Problems