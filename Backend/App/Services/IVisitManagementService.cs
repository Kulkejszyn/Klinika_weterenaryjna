using System.Collections.Generic;
using App.Models;

namespace App.Services
{
	public interface IVisitManagementService
	{
		void Add(Visit visit);
		Visit? GetVisit(string visitId);
		IEnumerable<Visit> GetVisits();
		void RemoveVisit(Visit visit);
	}
}
