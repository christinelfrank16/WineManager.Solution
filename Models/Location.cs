using System.Collections.Generic;

namespace WineManager.Models
{
    public class Location
    {
        public int LocationId { get; set; }
        public string Name { get; set; }
        public int XSlotCount { get; set; }
        public int YSlotCount { get; set; }
        public string Description { get; set; }
        
        public virtual ICollection<Slot> Slots { get; set; }

        public Location(int xDim, int yDim){
            this.Slots = new HashSet<Slot>();
        }
    }
}