import React, { useState } from 'react';
import "./Home.css";
import peopleWorking from './peopleWorking.png';
import guyWorking from './guyWorking.png'
import cohereLogo from './cohereLogo.png'

const Home = () => {
  return (
    <div>
      <div class="navbar">
        <button class="navbar-button">Sign in</button>
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

      <div>
        <h1 class="subtitle">Our Mission</h1>
        <p>Utilize our AI speech practice software in order to stay on top of your next interview. Coherence allows users to increase their interview and soft skills with progression based learning.</p>
        <button class="signup">Create Account</button>
        <hr></hr>
        <div>
          <img class="guyWorking" src={guyWorking} alt="A guy working" />
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}

export default Home