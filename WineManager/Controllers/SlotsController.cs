using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using WineManager.Models;
using WineManager.ControllerModels;

namespace WineManager.Controllers
{
    [Route("api/slots")]
    public class SlotsController : ControllerBase
    {
        private WineManagerContext _db;

        public SlotsController(WineManagerContext db)
        {
            _db = db;
        }

        // GET api/slots
        [HttpGet]
        public ActionResult<IEnumerable<Slot>> Get()
        {
            return _db.Slots.ToList();
        }

        // GET api/slots/3
        [HttpGet("{slotId:int}")]
        public ActionResult<Slot> Get(int slotId)
        {
            return _db.Slots.Include(slot => slot.Location).Include(slot => slot.WineItem).FirstOrDefault(slot => slot.SlotId == slotId);
        }

        // POST api/slots
        [HttpPost]
        public ActionResult<Slot> Post([FromBody] SlotData newData)
        {   
            Console.WriteLine("test", newData);
            Position positionObj = _db.Positions.FirstOrDefault(p => p.Value == newData.Position);
            if(positionObj == null)
            {
                positionObj = new Position();
                positionObj.Value = newData.Position;
                _db.Positions.Add(positionObj);
            }
            Slot newSlot = new Slot(){LocationId = newData.LocationId, WineItemId = newData.WineItemId, PositionId = positionObj.PositionId};
            _db.Slots.Add(newSlot);
            _db.SaveChanges();
            Console.WriteLine("test slot", newSlot);
            return _db.Slots.Include(slot => slot.Position).Include(slot => slot.WineItem).FirstOrDefault(slot => slot.SlotId == newSlot.SlotId); ;
        }
    }
}
