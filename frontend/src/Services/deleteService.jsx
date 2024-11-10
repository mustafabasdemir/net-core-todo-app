import axios from 'axios';

const BASE_URL = 'http://localhost:5062/api/ToDoApp/Delete'; 
export const deleteToDo = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data;

  } catch (error) {
    console.error('Silme işlemi sırasında bir hata oluştu:', error);
    return null
  }
};

