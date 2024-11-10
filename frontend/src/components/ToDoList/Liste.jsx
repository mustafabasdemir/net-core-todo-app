import React, { useState, useEffect } from "react";
import { FcLike, FcDislike } from "react-icons/fc";
import { getAllTodos } from "../../Services/GetAllService";
import AddModal from "../Modal/AddModal";
import { FcFullTrash } from "react-icons/fc";
import { updateToDo } from "../../Services/updateService";
import { deleteToDo } from "../../Services/deleteService";

const ToDoList = ({ fetchData }) => {

  const [todos, setTodos] = useState([]); // Verileri tutmak için state
  //getall
  useEffect(() => {
    const fetchTodos = async () => {
      const data = await getAllTodos(); 
      setTodos(data); 
    };
    fetchTodos();
    fetchData();
  }, []);

  //eklendiğinde yenılemek için 
  const fetchTodos = async () => {
    const data = await getAllTodos();
    setTodos(data);
    fetchData();
  };

  useEffect(() => {
    fetchTodos();
  }, []);
  
  //update
  const durumGuncelle = async (id,title,description,createdDate,isCompleted) => {
    try {
      const result = await updateToDo(id, title, description, createdDate, isCompleted);
  
      if (result) {
        console.log("Başarıyla güncellendi:", result);
        fetchTodos();
        fetchData();
      } else {
        console.log("Güncelleme başarısız.");
      }
    } catch (error) {
      console.error("Güncelleme hatası:", error);
    }
  };

  //delete
  const ToDoDelete = async (id) => {
    try {
      const result = await deleteToDo(id);
  
      if (result) {
        console.log("Başarıyla silindi:", result);
        fetchTodos();
        fetchData();
      } else {
        console.log("silme başarısız.");
      }
    } catch (error) {
      console.error("silme hatası:", error);
    }
  };

  return (
    <>
      <div className="h-[400px] bg-transparent  overflow-y-auto">
        <div className="flex flex-col space-y-4 custom-scrollbar overflow-y-auto h-96 pr-3">
          {/* Modal */}
          <AddModal onAddTodo={fetchTodos} />

          {/* 1 */}
          {todos.map((todo, key) => (
            <div  key={key} className="flex flex-col p-4 bg-gray-800 border-gray-800 shadow-md hover:bg-gray-600 rounded-2xl cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center mr-auto">

                  {todo.isCompleted ?  <FcLike className="text-3xl transform hover:scale-125 transition-all duration-300" onClick={() => durumGuncelle(todo?.id,todo?.title,todo?.description,todo?.createdDate,!todo?.isCompleted)}/>
                                        :
                                      <FcDislike className="text-3xl transform hover:scale-125 transition-all duration-300" onClick={() =>durumGuncelle(todo?.id,todo?.title,todo?.description,todo?.createdDate,!todo?.isCompleted)}/>}

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
                    <FcFullTrash  className="text-3xl transform hover:scale-125 transition-all duration-300" onClick={() =>ToDoDelete(todo?.id)}/>
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
