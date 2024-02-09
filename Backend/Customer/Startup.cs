using Customer.DataAccess;
using Microsoft.Azure.Functions.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

[assembly: FunctionsStartup(typeof(Customer.Startup))]
namespace Customer
{
    public class Startup : FunctionsStartup
    {
        public override void Configure(IFunctionsHostBuilder builder)
        {
            ConfigureServices(builder.Services);
        }

        private void ConfigureServices(IServiceCollection services)
        {
            var configuration = new ConfigurationBuilder()
                .AddEnvironmentVariables()
                .Build();
            var connectionString = configuration.GetConnectionString("Server=localhost; Database=ShopManagementDb; uid=SA; pwd=reallyStrongPwd123; TrustServerCertificate=true;");
            
            services.AddDbContext<CustomerDbContext>(options =>
                options.UseSqlServer(connectionString));
        }
    }
}
