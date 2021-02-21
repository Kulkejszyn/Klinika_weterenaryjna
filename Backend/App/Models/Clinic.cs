using System.Collections.Generic;

namespace App.Models
{
	public class Clinic
	{
		public string? Id { get; set; }
		public string? Name { get; set; }
		public string? Address { get; set; }
		public string? Description { get; set; }
		public int? Rating { get; set; }
		public List<string>? VisitTypes { get; set; }
	}
}
