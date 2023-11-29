// import logo from "./logo.svg";
// import "./App.css";
import { useState, useRef, useEffect } from "react";

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);
  useEffect(() => {
    console.log(ref.current);
    if (isPlaying) {
      ref.current.play(); // 渲染期间不能调用 `play()`。
    } else {
      ref.current.pause(); // 同样，调用 `pause()` 也不行。
    }
  }, []);

  return <video ref={ref} src={src} loop playsInline />;
}
function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState("");

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? "暂停" : "播放"}
        </button>
        <VideoPlayer
          isPlaying={isPlaying}
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        />
      </>
    </div>
  );
}

export default App;
