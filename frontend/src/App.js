import DateCard from "./components/Card/DateCart";
import ToDoList from "./components/ToDoList/Liste";
import InfoCard from "./components/Card/InfoCard";
import { useEffect, useState } from "react";
import { getAllTodos } from "./Services/GetAllService";

function App() {

  const [total, setTotal] = useState(0); // Toplam görev sayısı
  const [completedCount, setCompletedCount] = useState(0); // Tamamlanan görev sayısı
  const [incompleteCount, setIncompleteCount] = useState(0); 

  const fetchData = async () => {
    try {
      const data = await getAllTodos();
      setTotal(data.length);
      setCompletedCount(data.filter((item) => item.isCompleted).length);
      setIncompleteCount(data.filter((item) => !item.isCompleted).length);
    } catch (error) {
      console.error("veri alınamadı", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
        <div className="container  m-4">
          <div className="max-w-3xl w-full mx-auto grid gap-4 grid-cols-1">
            {/* Info Card */}
            <InfoCard total={total} completedCount={completedCount} incompleteCount={incompleteCount} />

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              <div className="flex flex-col p-3 relative items-center justify-center bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl ">
                <DateCard />

                {/* gif */}
                <div className=" relative w-full h-[50%] group mt-2 border border-gray-700">
                  <img src="/210726.gif" alt="Çay İçelim Mi ?" className="w-full h-full object-cover"/>
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
              <ToDoList fetchData={fetchData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
