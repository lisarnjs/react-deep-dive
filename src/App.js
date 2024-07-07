import { useRef, useState } from "react";
import "./App.css";
import CheckNetworkStatus from "./components/CheckNetworkStatus";
import GetNameForm from "./components/GetNameForm";
import SaveButton from "./components/SaveButton";
import useFadeIn from "./hooks/useFadeIn";

function Welcome() {
  const ref = useRef(null);

  useFadeIn(ref, 1000);

  return (
    <h1 className="welcome" ref={ref}>
      Welcome
    </h1>
  );
}

function App() {
  const [show, setShow] = useState(false);
  return (
    <main style={{ padding: "20px" }}>
      <GetNameForm />
      <br />
      <br />
      <h3>네트워크 연결 상태</h3>
      <CheckNetworkStatus />
      <br />
      <SaveButton />

      <div style={{ marginTop: "20px" }}>
        <hr />
        <button
          style={{ marginTop: "20px" }}
          onClick={() => setShow((prev) => !prev)}
        >
          {show ? "REMOVE" : "SHOW"}
        </button>
        {show && <Welcome />}
      </div>
    </main>
  );
}

export default App;
