import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./style.css";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(
    localStorage.getItem("todoData")
      ? JSON.parse(localStorage.getItem("todoData"))
      : []
  );
  const [todoList, setTodoList] = useState([]);
  const [status, setStatus] = useState("all");
  const [bgcolor, setBgcolor] = useState("linear-gradient(#e66465, #9198e5)");
  const deletTodo = (id) => {
    setData(
      data.filter((item) => {
        return item.id !== id;
      })
    );
  };
  const setKey = (key, id) => {
    setData(
      data.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            [key]: !item[key],
          };
        } else {
          return {
            ...item,
            correct: false,
          };
        }
      })
    );
  };

  const correctTodo = (text, id) => {
    if (text.trim() !== "")
      setData(
        data.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              text: text.trim(),
              correct: false,
            };
          } else {
            return item;
          }
        })
      );
  };

  const clearCompleted = () => {
    setData(
      data.map((item) => {
        if (item.completed) {
          return {
            ...item,
            deleted: true,
          };
        } else {
          return item;
        }
      })
    );
  };
  const cartFunc = (select) => {
    switch (select) {
      case "delete": {
        setData(
          data.filter((item) => {
            return !item.deleted;
          })
        );
        break;
      }
      case "restore": {
        setData(
          data.map((item) => {
            return {
              ...item,
              deleted: false,
            };
          })
        );
        break;
      }
    }
  };

  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(data));

    switch (status) {
      case "all": {
        setTodoList(
          data.filter((item) => {
            return !item.deleted;
          })
        );
        break;
      }

      case "completed": {
        setTodoList(
          data.filter((item) => {
            return !item.deleted && item.completed;
          })
        );
        break;
      }

      case "active": {
        setTodoList(
          data.filter((item) => {
            return !item.deleted && !item.completed;
          })
        );
        break;
      }
      case "cart": {
        setTodoList(
          data.filter((item) => {
            return item.deleted;
          })
        );
        break;
      }
    }
  }, [data, status]);
  return (
    <div className="wrapper">
      <div
        className="bg"
        style={{
          background: bgcolor,
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: "0px",
          left: "0px",
          zIndex: "-9999",
        }}
      ></div>
      <button
        onClick={() =>
          setBgcolor(
            bgcolor === "linear-gradient(#e66465, #9198e5)"
              ? "white"
              : "linear-gradient(#e66465, #9198e5)"
          )
        }
      >
        color change
      </button>

      <Header status={status} data={data} setData={setData} />
      <Main
        cartFunc={cartFunc}
        correctTodo={correctTodo}
        deletTodo={deletTodo}
        status={status}
        setKey={setKey}
        todoList={todoList}
      />
      <Footer
        clearCompleted={clearCompleted}
        status={status}
        setStatus={setStatus}
        todoList={todoList}
      />
    </div>
  );
}

export default App;
