using TodoApp.Models;

namespace TodoApp.Service
{
    public interface IToDoService
    {
        IEnumerable<ToDo> GetAll();
        ToDo Create(ToDo todo);
        ToDo UpdateById(int id, ToDo entity);
        void Delete(int id); 
    }
}
