

const Btns = ({setKey,item, status, deletTodo }) =>{
  return (
    
       <div className="todolist-menu-item-right">
              {status === "cart" ? (
                <>
                  <button className="todolist-btn delete-finally" onClick={()=>{
                    deletTodo(item.id)
                  }}>delete finally </button>
                  <button className="todolist-btn restore"
                    onClick={() => {
                      setKey("deleted", item.id);
                    }}
                  >
                    restore
                  </button>
                </>
              ) : (
                <>
                  <button className="todolist-btn correct" onClick={() =>{
                    setKey('correct', item.id)
                  }}>correct</button>
                  <button className="todolist-btn important"
                    onClick={() => {
                      setKey("important", item.id);
                    }}
                  >
                    important
                  </button>
                  <button className="todolist-btn delete"
                    onClick={() => {
                      setKey("deleted", item.id);
                    }}
                  >
                    delete
                  </button>
                </>
              )}
            </div>
    
  )
}

export default Btns;
