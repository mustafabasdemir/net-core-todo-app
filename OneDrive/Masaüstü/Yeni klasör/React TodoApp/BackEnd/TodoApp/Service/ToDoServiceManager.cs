using TodoApp.Models;
using TodoApp.Repository;

namespace TodoApp.Service
{
    public class ToDoServiceManager:IToDoService
    {
        private readonly IGenericRepository<ToDo> _todoRepository;


        public ToDoServiceManager(IGenericRepository<ToDo> todoRepository)
        {
            _todoRepository = todoRepository;
        }

        public ToDo Create(ToDo todo)
        {
            return _todoRepository.Add(todo);
        }

        public void Delete(int id)
        {
            _todoRepository.Delete(id);
        }

        public IEnumerable<ToDo> GetAll()
        {
            return _todoRepository.GetAll();
        }

        public ToDo UpdateById(int id, ToDo entity)
        {
            var updatedEntity = _todoRepository.UpdateById(id, entity);
            if (updatedEntity == null)
            {
                throw new KeyNotFoundException("id bulunamadı ya da başka bir sorun var");
            }
            return updatedEntity;
        }
    }
}
