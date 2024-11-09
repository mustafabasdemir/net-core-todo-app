
using Microsoft.EntityFrameworkCore;
using TodoApp.Models;

namespace TodoApp.Repository
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class,new()
    {
        private readonly ToDoContext _context;
        private readonly DbSet<T> _dbSet;

        public GenericRepository(ToDoContext context)
        {
            _context = context;
            _dbSet = _context.Set<T>();
        }

        public T Add(T entity)
        {
            _dbSet.AddAsync(entity); 
            _context.SaveChanges(); 
            return entity; 
        }

        public void Delete(int id)
        {
            var entity = _dbSet.Find(id);

            if (entity == null)
            {
                throw new ArgumentException("silme işleminde hata olustu");
            }
            _dbSet.Remove(entity);
            _context.SaveChanges();
        }

        public IEnumerable<T> GetAll()
        {
            try
            {
                return _dbSet.OrderByDescending(entity => EF.Property<DateTime>(entity, "CreatedDate")).ToList();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Hata Mesajşi: {ex.Message}");
                return Enumerable.Empty<T>(); 
            }
        }

        public T UpdateById(int id, T entity)
        {
            var existingEntity = _dbSet.Find(id);
            if (existingEntity == null)
            {
                throw new KeyNotFoundException("id numarasına ait deger bulunamadı");
            }
            _context.Entry(existingEntity).CurrentValues.SetValues(entity);
            _context.SaveChanges();
            return existingEntity;
        }
    }
}
