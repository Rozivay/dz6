import Btns from './Btns';
import Correct from './Correct';
import Addbtns from './Addbtns';

const Main = ({ todoList, setKey, status, deletTodo, correctTodo, cartFunc }) => {
  return (
    <div className="todoList-menu">

      
      {
        status === 'cart'
        ?<Addbtns cartFunc={cartFunc}/>
        :''
      }

      {
      todoList.length === 0
      
      ? <p>here is empty</p>
      : todoList.map((item) => {
        return (
          <div key={item.id} className={
            item.important
            ?'todolist-menu-item todolist-menu-item-important'
            :'todolist-menu-item'
          }>
            <div className="todolist-menu-item-left">
              {
                item.correct 
                ? <Correct item={item} correctTodo={correctTodo} setKey={setKey}/>
                : <> 
                <button
                onClick={() => {
                  setKey("completed", item.id);
                }}
              >
                {item.completed ? "+" : ""}
              </button>
              <p>{item.text}</p>
                  </>
              }
          
            </div>
            {
              item.correct
              ? ''
              :   <Btns setKey={setKey}  item={item} status={status} deletTodo={deletTodo}/>

            }
        
           
           
          </div>
        );
      })}
    </div>
  );
};

export default Main;
