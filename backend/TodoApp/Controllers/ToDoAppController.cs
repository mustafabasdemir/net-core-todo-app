using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;
using TodoApp.Models;
using TodoApp.Service;

namespace TodoApp.Controllers
{
    [Route("api/ToDoApp/[action]")]
    [ApiController]
    public class ToDoAppController : ControllerBase
    {
        private readonly IToDoService _toDoService;

        public ToDoAppController(IToDoService toDoService)
        {
            _toDoService = toDoService;
        }


        [HttpGet]
        [Route("/GetAll")]
        public IActionResult GetAll()
        {
            var todos = _toDoService.GetAll();
            if (todos == null || !todos.Any())
            {
                return NotFound("Şuan yapılacaklar listesi boş");
            }
            return Ok(todos);
        }

        [HttpPost]
        [Route("/Create")]
        public ActionResult Create(ToDo todo)
        {
            var response = _toDoService.Create(todo);
            return Ok(response);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody] ToDo todo)
        {
            if (todo == null || id != todo.Id)
            {
                return BadRequest("Invalid data.");
            }
            var updatedTodo = _toDoService.UpdateById(id, todo);
            return Ok(updatedTodo);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                _toDoService.Delete(id);
                return Ok("Silme işlemi başarılı.");

            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
           
        }

    }
}
