using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
            return _db.Locations.FirstOrDefault(location => location.LocationId == locationId);
        }

        [HttpPost]
        public void Post([FromBody] Location location)
        {   
            _db.Locations.Add(location);
            _db.SaveChanges();
        }
    }
}
