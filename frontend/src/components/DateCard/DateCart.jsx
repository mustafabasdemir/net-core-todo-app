import React from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/tr';  // Türkçe dil desteğini import et

// Türkçe yerelleştirmeyi aktif et
dayjs.locale('tr');

const DateCard = () => {
  // Güncel tarihi almak
  const currentDate = dayjs();
  
  // Gün, ay, yıl, hafta günü gibi bilgileri almak
  const day = currentDate.format('DD'); // Gün
  const month = currentDate.format('MMMM'); // Ay adı
  const year = currentDate.format('YYYY'); // Yıl
  const dayOfWeek = currentDate.format('dddd'); // Hafta günü

  return (
    
    <div className="w-full h-[50%] flex justify-end space-x-4 ">
    {/* söz */}
    <div className="w-[60%] h-[100%] bg-gray-50 rounded-lg shadow-md overflow-hidden border border-gray-300 p-1">
      <h2 className="text-center text-sm font-semibold text-gray-700 mb-1">
        Söz
      </h2>

      <p className="text-gray-600 leading-relaxed text-center text-sm font-semibold">
        Nerede olursan ol, Allah'a karşı sorumluluğunun bilincinde
        ol! Kötülüğün peşinden iyi bir şey yap ki onu yok etsin.
      </p>
    </div>

    {/* takvim */}
    <div className="w-[40%] h-[100%] bg-white rounded-lg overflow-hidden border border-gray-300">
      <div className="bg-red-500 text-white text-center">
        <p className="text-lg font-bold">{month}</p>
        <p className="text-sm p-1">{year}</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-5xl font-bold text-gray-800">{day}</p>
        <p className="text-lg text-gray-600">{dayOfWeek}</p>
      </div>
    </div>
  </div>




  );
};

export default DateCard;
