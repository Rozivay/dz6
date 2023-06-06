

 function Addbtns({cartFunc}) {
  return (
    <div className="cart-btns">
        <button onClick={()=>{
            cartFunc('delete')
        }}>delete all</button>
        <button onClick={()=>{
            cartFunc('restore')
        }} > restore all</button>
      
    </div>
  );
}

export default Addbtns;
