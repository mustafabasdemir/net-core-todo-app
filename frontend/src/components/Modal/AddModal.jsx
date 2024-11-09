import React, { useState } from "react";
import { addToDo } from "../../Services/addService";

const AddModal = () => {
  const [showModal, setShowModal] = useState(false); // Modal'ı kontrol etmek için state
  const [title, setTitle] = useState(""); // Title için state
  const [description, setDescription] = useState(""); // Description için state

  const handleSave = async () => {
    if (title) {
      const result = await addToDo(title, description); // addToDo fonksiyonunu çağırıyoruz
      if (result) {
        setShowModal(false);
        setTitle("");
        setDescription("");
      }
    } else {
      alert("Please fill in all fields.");
    }
  };
  return (
    <>
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
                  <h3 className="text-md font-semibold mx-auto">Add ToDo</h3>
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
                        onChange={(e) => setDescription(e.target.value)}
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
    </>
  );
};

export default AddModal;
