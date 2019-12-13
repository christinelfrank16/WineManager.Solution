namespace WineManager.Models
{
    public class Favorite
    {
        public int FavoriteId { get; set; }
        public int WineItemId { get; set; }
        
        public virtual WineItem WineItem { get; set; }
    }
}