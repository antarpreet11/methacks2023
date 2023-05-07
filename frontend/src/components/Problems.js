import React from 'react'
import "./Problems.css";

import logo from './logo.png'
import dashboard from './dashboard.png'
import practice from './practice.png'
import premium from './premium.png'
import profile from './adam.png'
import play from './play.png'
import preview from './premiumPreview.png'

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
        <h2>Weekly Problems</h2>

        <button class="question">Question #1234
          <div class="score">Best Score: 50%</div>
          <img src={play} alt="play" />
        </button>

        <button class="question">Question #1234
          <div class="score">Best Score: 50%</div>
          <img src={play} alt="play" />
        </button>

        <button class="question">Question #1234
          <div class="score">Best Score: 50%</div>
          <img src={play} alt="play" />
        </button>

        <button class="question">Question #1234
          <div class="score">Best Score: 50%</div>
          <img src={play} alt="play" />
        </button>

        <button class="question">Question #1234
          <div class="score">Best Score: 50%</div>
          <img src={play} alt="play" />
        </button>

        <img class="preview" src={preview} alt="Preview of Premium questions" />

      </div>
    </div>
  )
}

export default Problems