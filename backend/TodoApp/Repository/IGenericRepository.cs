namespace TodoApp.Repository
{
    public interface IGenericRepository<T> where T : class,new()
    {
        T Add(T entity);                   // Veritabanına yeni veri ekler
        IEnumerable<T> GetAll();            // Tüm veriyi getirir
        T UpdateById(int id, T entity);              // Veriyi günceller
        void Delete(int id);                // Veriyi siler

    }
}
