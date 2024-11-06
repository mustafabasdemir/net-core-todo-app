namespace TodoApp.Models
{
    public class ToDo
    {

        public int Id { get; set; }
        public string Title { get; set; }
        public string? Description { get; set; }
        public DateTime CreatedDate { get; set; }
        public bool IsCompleted { get; set; }


    }
}
