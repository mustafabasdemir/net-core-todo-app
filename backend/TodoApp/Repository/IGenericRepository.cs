namespace TodoApp.Repository
{
    public interface IGenericRepository<T> where T : class,new()
    {
        T Add(T entity);                   
        IEnumerable<T> GetAll();           
        T UpdateById(int id, T entity);             
        void Delete(int id);                

    }
}
