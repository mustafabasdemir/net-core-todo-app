import React, { useState, useEffect } from "react";
import { FcPieChart } from "react-icons/fc";
import { FcLike, FcDislike } from "react-icons/fc";
import { addToDo } from "../src/Services/addService";
import DateCard from "./components/DateCard/DateCart";
import AddModal from "./components/Modal/AddModal";
import axios from "axios";
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
                {/* <DateCard/> */}
                <div className="w-full h-[50%] flex justify-end space-x-4 ">
                  {/* söz */}
                  <div className="w-[60%] h-[100%] bg-gray-50 rounded-lg shadow-md overflow-hidden border border-gray-300 p-1">
                    <h2 className="text-center text-sm font-semibold text-gray-700 mb-1">
                      Günün Sözü
                    </h2>

                    <p className="text-gray-600 leading-relaxed text-center text-sm font-semibold">
                      Nerede olursan ol, Allah'a karşı sorumluluğunun bilincinde
                      ol! Kötülüğün peşinden iyi bir şey yap ki onu yok etsin.
                    </p>
                  </div>

                  {/* takvim */}
                  <div className="w-[40%] h-[100%] bg-white rounded-lg overflow-hidden border border-gray-300">
                    <div className="bg-red-500 text-white text-center">
                      <p className="text-lg font-bold">Kasım</p>
                      <p className="text-sm p-1">2024</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="text-5xl font-bold text-gray-800">07</p>
                      <p className="text-lg text-gray-600">Perşembe</p>
                    </div>
                  </div>
                </div>

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
                  {/* <AddModal /> */}

                  <button
                    onClick={() => setShowModal(true)}
                    className="block w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add ToDo
                  </button>

                  {/* Modal Açıldığında Görünecek Kısım */}
                  {showModal ? (
                    <>
                      {/* Modal Arka Plan */}
                      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>

                      {/* Modal İçeriği */}
                      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                          {/* Modal Content */}
                          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/* Modal Başlık (Header) */}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                              <h3 className="text-md font-semibold mx-auto">
                                Add ToDo
                              </h3>
                            </div>

                            {/* Modal Gövdesi (Body) */}
                            <div className="p-4 md:p-5">
                              <form className="space-y-4" action="#">
                                <div>
                                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Title
                                  </label>
                                  <input
                                    type="text"
                                    name="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="clean the house"
                                    required
                                  />
                                </div>
                                <div>
                                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Description
                                  </label>
                                  <input
                                    type="text"
                                    name="description"
                                    value={description}
                                    onChange={(e) =>
                                      setDescription(e.target.value)
                                    }
                                    placeholder="I will try to clean the house better"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                  />
                                </div>
                              </form>
                            </div>

                            {/* Modal Alt Bilgisi (Footer) */}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                              <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)} // Modal'ı kapat
                              >
                                Close
                              </button>
                              <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => handleSave()} // Modal'ı kapat
                              >
                                Save Changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : null}

                  {/* 1 */}
                  {todos.map((todo) => (
         
                  <div className="flex flex-col p-4 bg-gray-800 border-gray-800 shadow-md hover:bg-gray-600 rounded-2xl cursor-pointer">
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
                          <FcDislike className="text-3xl"  style={{ opacity: todo.isCompleted ? 1 : 0.4 }} />
                        </div>
                      </div>
                    </div>
                  </div>

                ))}
                </div>
              </div>
              {/* todo end */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
