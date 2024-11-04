import { useState } from "react";
import Castle from "./components/01_Castle";

function App() {
  const [displayMessage, setDisplayMessage] = useState("");

  const handdisPlay = (message) => {
    setDisplayMessage(message);
  };

  const message1 = "Do you love React ?";

  return (
    <div>
      <p>Message for JSD8: {message1}</p>
      <p>
        Reply from the Secret Room: {" "}
        <spen>
          {displayMessage ? displayMessage : "Waiting for a reply..."}
        </spen>
      </p>
      <Castle message1={message1} handdisPlay={handdisPlay}/>
    </div>
  );
}

export default App
