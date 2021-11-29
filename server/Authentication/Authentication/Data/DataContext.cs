using Authentication.Entities;
using Microsoft.EntityFrameworkCore;

namespace Authentication.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<AppUser> Users { get; set; }
    }
}
