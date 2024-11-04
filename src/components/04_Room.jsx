import Hall from "./05_Hall";

function Room ({message1, handdisPlay}) {
  return (
    <div>
      <Hall message1={message1} handdisPlay={handdisPlay}/>  
    </div>
  );
}

export default Room;