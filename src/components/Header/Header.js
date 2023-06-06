import { useState } from "react";

const Header = ({data, setData, status}) => {
const[text, setText] = useState('');



    const addTodo = (text) =>{
        if(text.trim() && status === 'all'){
            setData([
                {
                    completed: false,
                    important:false,
                    deleted:false,
                    correct:false, 
                   text:text.trim(),
                   id: Math.random ()
                },
                ...data
            ]);
            setText('')
        }
    }

    return(
        <div className="header">
  

<button onClick={() => {
    addTodo(text)
}}>+</button>
<input value={text} onChange={(event) =>{
    setText(event.target.value)
}} type="text" onKeyDown={(e) =>{
    if(e.key === 'Enter'){
        addTodo(text)
    }
}}
disabled={status !== 'all'}
placeholder={status === 'all' ?' create todo...' :'you can create todo in "all"'}
/>
        </div>
    );
}

export default Header;