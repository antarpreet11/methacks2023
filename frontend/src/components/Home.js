import React, { useState } from 'react';
import "./Home.css";
import peopleWorking from './peopleWorking.png';
import guyWorking from './guyWorking.png'
import cohereLogo from './cohereLogo.png'
import logo from './logo.png'

const Home = () => {
  return (
    <div>
      <div class="navbar">
        <button class="navbar-button">Sign in</button>
        <div>
          <img class="logo" src={logo} alt="Logo" />
        </div>
      </div>

      {/*brown rectangle thing with a masked white rectangle (slices)
      and the People Working image is actually 2 images carefully layered*/}
      <div class="brown-rect">
        <div class="name">
          <h1 class="title">Co:here</h1>
        </div>

        <h1 class="title">A new way to interview</h1>
        <img class="peopleWorking-layer1" src={peopleWorking} alt="People working together" />

        <div class="brown-rect-mask">
          <img class="peopleWorking-layer2" src={peopleWorking} alt="People working together" />
        </div>
      </div>

      {/*brown rectangle thing with a masked white rectangle (slices)
      and the People Working image is actually 2 images carefully layered*/}
      <div>
        <h1 class="subtitle">Our Mission</h1>
        <p>Utilize our AI speech practice software in order to stay on top of your next interview. Coherence allows users to increase their interview and soft skills with progression based learning.</p>
        <button class="signup">Create Account</button>
        <hr></hr>
      </div>

        <div class="row">
          <img class="img-left" src={guyWorking} alt="A guy working" />
          <div class="text-left">
            <h2>All your tools on one platform</h2>
            <p>With Coherence users have access to hundreds of questions with instant feedback. Show you employers what you’re made of with your Coherency Profile  and score!</p>
          </div>
        </div>

        <div class="row">
          <div class="text-right">
            <h2>Powered by Co:here</h2>
            <p>Using co:here’s high performance language API we can guarantee realism with every practice interview in any language.</p>
          </div>
          <img class="img-right" src={cohereLogo} alt="Co:here logo" />
        </div>
    </div>
  );
}

export default Home