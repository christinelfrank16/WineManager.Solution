using Newtonsoft.Json;

namespace WineManager.Models
{
    public class Slot {
        public int SlotId { get; set; }
        public int PositionId { get; set; }
        public int LocationId { get; set; }
        public int WineItemId { get; set; }

        public virtual WineItem WineItem { get; set; }
        public virtual Position Position { get; set; }
        [JsonIgnore]
        public virtual Location Location { get; set; }
    }
}