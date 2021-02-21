using System.Collections.Generic;
using System.Linq;
using App.Models;
using Utils;

namespace App.Services
{
	public class VisitManagementService : IVisitManagementService
	{
		private readonly RandomGenerator _randomGenerator;

		private readonly List<Visit> _visits;

		public VisitManagementService(RandomGenerator randomGenerator)
		{
			_randomGenerator = randomGenerator;
			_visits = new List<Visit>();
		}

		public void Add(Visit visit)
		{
			string visitId;
			do
			{
				visitId = _randomGenerator.RandomString(15);
			} while (_visits.Exists(v => v.Id == visitId));

			visit.Id = visitId;
			_visits.Add(visit);
		}

		public Visit? GetVisit(string visitId) => _visits.FirstOrDefault(visit => visit.Id == visitId);

		public IEnumerable<Visit> GetVisits() => _visits;

		public void RemoveVisit(Visit visit)
		{
			_visits.Remove(visit);
		}
	}
}
