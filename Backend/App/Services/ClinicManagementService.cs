using System.Collections.Generic;
using System.Linq;
using App.Models;
using Utils;

namespace App.Services
{
	public class ClinicManagementService : IClinicManagementService
	{
		private readonly RandomGenerator _randomGenerator;
		readonly List<string> _visitTypes = new List<string>(new string[] {"Szczepienie", "Ekstrakcja kleszcza", "Pobranie krwi", "Konsultacja chirurgiczna", "Kontynuacja leczenia", "Pielęgnacja"});

		public ClinicManagementService(RandomGenerator randomGenerator)
		{
			_randomGenerator = randomGenerator;
		}

		public IEnumerable<Clinic> GetClinics()
		{
			return Enumerable.Range(1, 6).Select(index => new Clinic
			{
				Name = "Przychodnia nr " + index,
				Address = "Kraków ulica " + index,
				Rating = _randomGenerator.GetRandomInt(1, 10),
				Description = "Description " + index,
				Id = _randomGenerator.RandomString(15),
				VisitTypes = RandomVisits(3)
			});
		}

		private List<string> RandomVisits(int count)
		{
			return _randomGenerator.TakeRandomElements(_visitTypes, _randomGenerator.GetRandomInt(1, _visitTypes.Count)).ToList();
		}
	}
}
