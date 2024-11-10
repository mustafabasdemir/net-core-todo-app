import axios from "axios";

const API_BASE_URL = "http://localhost:5062/api/ToDoApp";

export const updateToDo = async (id, title, description, createdDate, isCompleted) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/Update/${id}`, {
      id,
      title,
      description, 
      createdDate, 
      isCompleted 
    });
    
    return response.data;
  } catch (error) {
    console.error("Error updating todo:", error);
    return null;
  }
};
