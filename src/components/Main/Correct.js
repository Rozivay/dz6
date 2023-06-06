import { useState } from "react";

const Correct =({correctTodo, setKey, item}) => {
    const[text, setText] = useState(item.text);
  return (
    <>
      <input onChange={e => setText(e.target.value)} value={text} type="text" />
      <button onClick={() =>{
        correctTodo(text, item.id)
      }}>save</button>

      <button onClick={() =>{
        setKey('correct', item.id)
      }}> cancel</button>
    </>
  );
}

export default Correct;
