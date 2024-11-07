using Microsoft.EntityFrameworkCore;
using TodoApp.Models;
using TodoApp.Repository;
using TodoApp.Service;

var builder = WebApplication.CreateBuilder(args);

//coonection stirng
string connectionString = builder.Configuration.GetConnectionString("DatabaseConnection");


// CORS politikasý tanýmla
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
    {
        policy.WithOrigins("http://localhost:3000") // React uygulamanýzýn adresini buraya yazýn
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});


// dependency
builder.Services.AddDbContext<ToDoContext>(options =>
    options.UseSqlServer(connectionString));

//generic 
// Generic Repository'yi Scoped olarak ekleyelim
builder.Services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));
// ToDoServiceManager
builder.Services.AddScoped<IToDoService, ToDoServiceManager>();


// Add services to the container.
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// CORS politikasýný kullan
app.UseCors("AllowReactApp");

app.UseAuthorization();

app.MapControllers();

app.Run();
