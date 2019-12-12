using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WineManager.Models;

namespace WineManager.Controllers
{
    [Route("api/wine")]
    public class WineItemsController : ControllerBase
    {
        private WineManagerContext _db;

        public WineItemsController(WineManagerContext db)
        {
            _db = db;
        }

        // GET api/wine
        [HttpGet]
        public ActionResult<IEnumerable<Location>> Get()
        {
            return _db.WineItems.ToList();
        }

        // GET api/locations/3
        [HttpGet("{locationId:int}")]
        public ActionResult<Location> Get(int wineItemId)
        {
            return _db.WineItems.FirstOrDefault(wineItem => wineItem.WineItemId == wineItemId);
        }

        [HttpPost]
        public void Post([FromBody] WineItem wineItem)
        {   
            _db.WineItems.Add(wineItem);
            _db.SaveChanges();
        }
    }
}
