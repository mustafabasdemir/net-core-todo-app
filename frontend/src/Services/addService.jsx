import axios from "axios";
import showAlert from "../components/alerts/alert";


const API_URL = "http://localhost:5062/Create";
export const addToDo = async (title, description) => {
  try {
    const response = await axios.post(API_URL, {
      id:0,
      title,
      description,
      createdDate: new Date().toISOString(),
      isCompleted: false, //start
    });
    //alert
    showAlert('success',"Görev Eklendi")
    return response.data;
  } catch (error) {
    showAlert('error',"İşlem Başarısız")
    return null; 
  }
};
