import React, { useState, useEffect } from "react";
import { FcLike, FcDislike } from "react-icons/fc";
import { getAllTodos } from "../../Services/GetAllService";
import AddModal from "../Modal/AddModal";

const ToDoList = () => {

  const [todos, setTodos] = useState([]); // Verileri tutmak için state

  const kalpTiklandi = (id) => {
    alert(id);
  };
  //getall

  useEffect(() => {
    const fetchTodos = async () => {
      const data = await getAllTodos(); // Servisten veriyi al
      setTodos(data); 
    };
    fetchTodos();
  }, []);

  return (
    <>
      <div className="h-[400px] bg-transparent  overflow-y-auto">
        <div className="flex flex-col space-y-4 custom-scrollbar overflow-y-auto h-96 pr-3">
          {/* Modal */}
          <AddModal />

          {/* 1 */}
          {todos.map((todo, key) => (
            <div  key={key} className="flex flex-col p-4 bg-gray-800 border-gray-800 shadow-md hover:bg-gray-600 rounded-2xl cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center mr-auto">
                  <FcLike className="text-3xl" style={{ opacity: todo.isCompleted ? 1 : 0.4 }} />
                  {(todo.isCompleted = !todo.isCompleted)}

                  <div className="flex flex-col ml-3 min-w-0">
                    <div className="font-medium leading-none text-gray-100">
                      {todo.title}
                    </div>
                    <p className="text-sm text-gray-500 leading-none mt-1 truncate">
                      {todo.description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col ml-3 min-w-0">
                  <div className="flex">
                    <FcDislike className="text-3xl" style={{ opacity: todo.isCompleted ? 1 : 0.4 }} onClick={() => kalpTiklandi(todo?.id)}/>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ToDoList;
