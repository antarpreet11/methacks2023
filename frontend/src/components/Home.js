import React, { useState } from 'react';
import "./Home.css";
import peopleWorking from './peopleWorking.png';
import guyWorking from './guyWorking.png'
import cohereLogo from './cohereLogo.png'
import logo from './logo.png'

const Home = () => {
  return (
    <div>
      <div className="navbar">
        <button className="navbar-button">Sign in</button>
        <img src={logo} alt="logo" />
      </div>

      {/*brown rectangle thing with a masked white rectangle (slices)
      and the People Working image is actually 2 images carefully layered*/}
      <div className="brown-rect">
        <div className="name">
          <h1 className="title">uPrep</h1>
        </div>

        <h1 className="title">a new way to interview</h1>
        <img className="peopleWorking-layer1" src={peopleWorking} alt="People working together" />

        <div className="brown-rect-mask">
          <img className="peopleWorking-layer2" src={peopleWorking} alt="People working together" />
        </div>
      </div>

      {/*brown rectangle thing with a masked white rectangle (slices)
      and the People Working image is actually 2 images carefully layered*/}
      <div>
        <h1 className="subtitle">Our Mission</h1>
        <p>Utilize our AI speech practice software in order to stay on top of your next interview. Coherence allows users to increase their interview and soft skills with progression based learning.</p>
        <button className="signup">Create Account</button>
        <hr></hr>
      </div>

        <div className="row">
          <img className="img-left" src={guyWorking} alt="A guy working" />
          <div className="text-left">
            <h2>All your tools on one platform</h2>
            <p>With Coherence users have access to hundreds of questions with instant feedback. Show you employers what you’re made of with your Coherency Profile  and score!</p>
          </div>
        </div>

        <div className="row">
          <div className="text-right">
            <h2>Powered by Co:here</h2>
            <p>Using co:here’s high performance language API we can guarantee realism with every practice interview in any language.</p>
          </div>
          <img className="img-right" src={cohereLogo} alt="Co:here logo" />
        </div>
    </div>
  );
}

export default Home