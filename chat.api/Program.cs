using chat.api.SignalHub;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSignalR();
// builder.Services.AddCors();

// builder.Services.AddCors(option =>
// {
//     option.AddPolicy("ClientPermission", policy =>
//     {
//         policy.AllowAnyHeader()
//             .AllowAnyMethod()
//             .AllowAnyOrigin()
//             // .WithOrigins("https://salmon-moss-0e92ddd00.1.azurestaticapps.net")
//             .AllowCredentials();
//     });
// });

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
}

app.UseSwagger();
app.UseSwaggerUI();
// app.UseCors("ClientPermission");
// app.UseCors(option => option.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();
app.MapHub<ChatHub>("/hub/chat");

app.Run();
