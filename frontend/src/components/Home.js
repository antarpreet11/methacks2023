import React from 'react'
import "./Home.css";
import peopleWorking from './peopleWorking.png';
import guyWorking from './guyWorking.png'
import cohereLogo from './cohereLogo.png'

const Home = () => {
  return (
    <div>
      <div>
        Premium
      </div>

      {/*brown rectangle thing with a masked white rectangle (slices)
      and the People Working image is actually 2 images carefully layered*/}
      <div class="brown-rect">
        <h1>A new way to interview</h1>
        <img class="peopleWorking-layer1" src={peopleWorking} alt="People working together" />

        <div class="brown-rect-mask"> {/*brown rectangle thing */}
          <img class="peopleWorking-layer2" src={peopleWorking} alt="People working together" />
        </div>
      </div>

      <div>
      <h3 className="opening-title">Our Mission</h3>
        <p>Utilize our AI speech practice software in order to stay on top of your next interview. Coherence allows users to increase their interview and soft skills with progression based learning.</p>
        <button>Create Account</button>
        <hr></hr>
        <img src={guyWorking} alt="A guy working" />
        <p><b>All your tools on one platform</b>
        With Coherence users have access to hundreds of questions with instant feedback. Show you employers what you’re made of with your Coherency Profile  and score! </p>

        <p><b>Powered by co:here</b>
Using co:here’s high performance language API we can guarantee realism with every practice interview in any language. </p>
        <img src={cohereLogo} alt="Co:here logo" />
      </div>

        

    </div>
  );
}

export default Home