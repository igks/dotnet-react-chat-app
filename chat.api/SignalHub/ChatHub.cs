using Microsoft.AspNetCore.SignalR;

namespace chat.api.SignalHub
{
    public class MessageModel
    {
        public string? User { get; set; }
        public string? Message { get; set; }
    }
    public class ChatHub : Hub
    {
        public async Task SendMessage(MessageModel msg)
        {
            System.Console.WriteLine("Message received in server");
            await Clients.All.SendAsync("ReceiveMessage", msg);
        }
    }
}