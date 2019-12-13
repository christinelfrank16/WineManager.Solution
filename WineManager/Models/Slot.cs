namespace WineManager.Models
{
    public class Slot {
        public int SlotId { get; set; }
        public string SlotPosition { get; }
        public int LocationId { get; set; }
        public int WineItemId { get; set; }

        public virtual WineItem WineItem { get; set; }
        public virtual Location Location { get; set; }
    }
}