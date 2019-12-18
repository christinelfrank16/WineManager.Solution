using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using WineManager.Models;

namespace WineManager.Controllers
{
    [Route("api/locations")]
    public class WineLocationController : ControllerBase
    {
        private WineManagerContext _db;

        public WineLocationController(WineManagerContext db)
        {
            _db = db;
        }

        // GET api/locations
        [HttpGet]
        public ActionResult<IEnumerable<Location>> Get()
        {
            return _db.Locations.ToList();
        }

        // GET api/locations/3
        [HttpGet("{locationId:int}")]
        public ActionResult<Location> Get(int locationId)
        {
            return _db.Locations.Include(location => location.Slots).ThenInclude(slot => slot.WineItem).Include(location => location.Slots).ThenInclude(slot => slot.Position).FirstOrDefault(location => location.LocationId == locationId);
        }

        // POST api/locations
        [HttpPost]
        public ActionResult<Location> Post([FromBody] Location location)
        {   
            Console.WriteLine("test location", location);
            _db.Locations.Add(location);
            _db.SaveChanges();
            return location;
        }
    }
}
