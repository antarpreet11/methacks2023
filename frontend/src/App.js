import SpeechToText from "./components/SpeechToText";

function App() {
  const timeLimit = 180000;
  const testLimit = 10000;

  return (
    <div>
      <h1>Hello World!</h1>
      <SpeechToText timeLimit={timeLimit} />
    </div>  
  );
}

export default App;
