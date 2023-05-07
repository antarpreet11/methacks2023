import React from 'react'
import "./Problems.css";

import logo from './logo.png'
import dashboard from './dashboard.png'
import practice from './practice.png'
import premium from './premium.png'
import profile from './adam.png'
import play from './play.png'
import preview from './premiumPreview.png'

import { Link } from "wouter"

const Problems = () => {
  return (
    <div>
      <div className="sidenav">
        <div className="row">
          <img className="logo" src={logo} alt="Logo" />
          <a href="#home">uPrep</a>
        </div>
        <hr></hr>

        <div className="row">
          <img className="image" src={dashboard} alt="Dashboard" />
          <a href="#dashboard">Dashboard</a>
        </div>
        <div className="row">
          <img className="image" src={practice} alt="Practice" />
          <a href="#practice">Practice</a>
        </div>
        <div className="row">
          <img className="image" src={premium} alt="Premium" />
          <a href="#premium">Premium</a>
        </div>

        <div className="sidenav-profile">
          <div className="row">
            <img className="image" src={profile} alt="Profile Picture" />
            <a href="#profile">Adam M.</a>
          </div>
        </div>
      </div>

      <div className="main">
        <h2>Weekly Problems</h2>

        <button className="question">Question #1234
          <div className="score">Best Score: 50%</div>
          <Link to="/assess">
            <img src={play} alt="play" />
          </Link>
        </button>

        <button className="question">Question #1234
          <div className="score">Best Score: 50%</div>
          <img src={play} alt="play" />
        </button>

        <button className="question">Question #1234
          <div className="score">Best Score: 50%</div>
          <img src={play} alt="play" />
        </button>

        <button className="question">Question #1234
          <div className="score">Best Score: 50%</div>
          <img src={play} alt="play" />
        </button>

        <button className="question">Question #1234
          <div className="score">Best Score: 50%</div>
          <img src={play} alt="play" />
        </button>

        <img className="preview" src={preview} alt="Preview of Premium questions" />

      </div>
    </div>
  )
}

export default Problems