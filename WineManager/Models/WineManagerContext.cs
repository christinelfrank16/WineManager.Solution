using Microsoft.EntityFrameworkCore;

namespace WineManager.Models
{
  public class WineManagerContext : DbContext
  {
      public WineManagerContext(DbContextOptions<WineManagerContext> options) : base(options) { }

      public DbSet<WineItem> WineItems { get; set; }
      public DbSet<Slot> Slots { get; set; }
      public DbSet<Location> Locations { get; set; }
      public DbSet<Favorite> Favorites { get; set; }
  }
}