import { useState } from "react";

function SecretRoom({message1, handdisPlay}) {
  const [reply, setReply] = useState("");
  return (
    <div>
      SecretRoom
      <p>Message for JSD8: {message1}</p>
      <textarea
        placeholder="Type your reply here..."
      />
      <button onClick={() => handdisPlay(reply)}>
        Send Reply
      </button>
    </div>
  );
}

export default SecretRoom;