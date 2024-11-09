import { FcPieChart } from "react-icons/fc";
import { FcLike, FcDislike } from "react-icons/fc";

const InfoCard = () => {

    return(
        <>
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
        </>
    )
}


export default InfoCard;