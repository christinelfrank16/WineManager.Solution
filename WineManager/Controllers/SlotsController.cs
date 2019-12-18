using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using WineManager.Models;

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
        public ActionResult<Slot> Post([FromBody] Slot newSlot)
        {   
            Console.WriteLine("test slot", newSlot);
            _db.Slots.Add(newSlot);
            _db.SaveChanges();
            return newSlot;
        }
    }
}
