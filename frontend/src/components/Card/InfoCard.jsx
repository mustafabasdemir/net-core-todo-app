import { useEffect, useState } from "react";
import { FcPieChart } from "react-icons/fc";
import { FcLike, FcDislike } from "react-icons/fc";
import { getAllTodos } from "../../Services/GetAllService";

const InfoCard = () => {

    const [total, setTotal] = useState(0); // Toplam görev sayısı
    const [completedCount, setCompletedCount] = useState(0); // Tamamlanan görev sayısı
    const [incompleteCount, setIncompleteCount] = useState(0); 



    useEffect(() => {
        // API çağrısı
        const fetchData = async () => {
          try {
            const data = await getAllTodos(); 
            setTotal(data.length); 
            const completed = data.filter((item) => item.isCompleted).length;
            const incomplete = data.filter((item) => !item.isCompleted).length;
            setCompletedCount(completed); 
            setIncompleteCount(incomplete); 
          } catch (error) {
            console.error("veri alınamadı", error); 
          }
        };
    
        fetchData();
      }, []);

    return(
        <>
        <div className="grid grid-cols-12 gap-4 ">
              <div className="col-span-12 sm:col-span-4">
                <div className="p-3 relative  bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl">
                  <FcPieChart className="h-14 w-14  absolute bottom-4 right-3" />
                  <div className="text-2xl text-gray-100 font-medium leading-8 mt-2">
                    {total}
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
                    {completedCount}
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
                    {incompleteCount}
                  </div>
                  <div className="text-m text-gray-500">Yapılmayanlar</div>
                </div>
              </div>
            </div>
        </>
    )
}


export default InfoCard;