import React, { useState, useEffect } from "react";
import { FcPieChart } from "react-icons/fc";
import { FcLike, FcDislike } from "react-icons/fc";
import { addToDo } from "../src/Services/addService";
import DateCard from "./components/DateCard/DateCart";
import AddModal from "./components/Modal/AddModal";
import { getAllTodos } from "./Services/GetAllService";

function App() {
  const [showModal, setShowModal] = useState(false); // Modal'ı kontrol etmek için state

  const [title, setTitle] = useState(""); // Title için state
  const [description, setDescription] = useState(""); // Description için state
  const [todos, setTodos] = useState([]); // Verileri tutmak için state
  const [loading, setLoading] = useState(true); // Yükleniyor durumu
  //api
  const handleSave = async () => {
    if (title) {
      const result = await addToDo(title, description); // addToDo fonksiyonunu çağırıyoruz
      if (result) {
        // Başarılı bir şekilde API'den veri dönerse, modal'ı kapatıyoruz ve formu sıfırlıyoruz
        setShowModal(false);
        setTitle("");
        setDescription("");
      }
    } else {
      alert("Please fill in all fields.");
    }
  };

 const kalpTiklandi = (id) => {
  alert(id);
 }
  //getall

  useEffect(() => {
    const fetchTodos = async () => {
      const data = await getAllTodos(); // Servisten veriyi al
      setTodos(data); // Gelen veriyi state'e kaydet
      setLoading(false); // Yükleniyor durumunu sonlandır
    };
    fetchTodos();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
        <div className="container  m-4">
          <div className="max-w-3xl w-full mx-auto grid gap-4 grid-cols-1">
            <div className="grid grid-cols-12 gap-4 ">
              <div className="col-span-12 sm:col-span-4">
                <div className="p-3 relative  bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl">
                  <FcPieChart className="h-14 w-14  absolute bottom-4 right-3" />
                  <div className="text-2xl text-gray-100 font-medium leading-8 mt-2">
                    20
                  </div>
                  <div className="text-m text-gray-500">Tüm Görevler</div>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-4">
                <div className="p-3 relative  bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl">
                  <FcLike className="h-14 w-14  absolute bottom-4 right-3 " />
                  <div className="flex justify-between items-center ">
                    <i className="fab fa-behance text-xl text-gray-400"></i>
                  </div>
                  <div className="text-2xl text-gray-100 font-medium leading-8 mt-2">
                    99
                  </div>
                  <div className="text-m text-gray-500">Yapılan Görevler</div>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-4">
                <div className="p-3 relative  bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl">
                  <FcDislike className="h-14 w-14  absolute bottom-4 right-3" />
                  <div className="flex justify-between items-center ">
                    <i className="fab fa-codepen text-xl text-gray-400"></i>
                  </div>
                  <div className="text-2xl text-gray-100 font-medium leading-8 mt-2">
                    50
                  </div>
                  <div className="text-m text-gray-500">Yapılmayanlar</div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              <div className="flex flex-col p-3 relative items-center justify-center bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl ">
                <DateCard/>
        

                <div className=" relative w-full h-[50%] group mt-2 border border-gray-700">
                  {/* gif */}
                  <img
                    src="/210726.gif"
                    alt="Çay İçelim Mi ?"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute ml-44 top-2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="relative bg-white text-black text-sm p-3 rounded-lg shadow-lg border border-gray-600">
                      Çay İçelim Mi ? 🍵
                      {/* konusma balonu baslangic */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full border-[10px] border-transparent border-t-white"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* todoo  */}

              <div className="h-[400px] bg-transparent  overflow-y-auto">
                <div className="flex flex-col space-y-4">
                  {/* Modal */}
                  <AddModal />

                  {/* 1 */}
                  {todos.map((todo, key) => (
         
                  <div key={key} className="flex flex-col p-4 bg-gray-800 border-gray-800 shadow-md hover:bg-gray-600 rounded-2xl cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center mr-auto">
                        <FcLike className="text-3xl" style={{ opacity: todo.isCompleted ? 1 : 0.4 }}  />
                        {todo.isCompleted = !todo.isCompleted}

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
                          <FcDislike className="text-3xl"  style={{ opacity: todo.isCompleted ? 1 : 0.4 }} onClick={() => kalpTiklandi(todo?.id)}/>
                        </div>
                      </div>
                    </div>
                  </div>

                ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
