namespace WineManager.Models
{
    public class WineItem
    {
        public int WineItemId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Style { get; set; }
        public string Vintner { get; set; }
        public string Varietal { get; set; }
        public int Vintage { get; set; }
        public string Origin { get; set; }
        public int Rating { get; set; }
        public int Score { get; set; }
        public string Scorer { get; set; }
        public double Alcohol { get; set; }
        
    }
}