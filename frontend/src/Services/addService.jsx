import axios from "axios";

const API_URL = "http://localhost:5062/Create";
export const addToDo = async (title, description) => {
  alert(title);
  try {
    const response = await axios.post(API_URL, {
      id:0,
      title,
      description,
      createdDate: new Date().toISOString(),
      isCompleted: false, //start
    });

    return response.data;
  } catch (error) {
    
    return null; 
  }
};
