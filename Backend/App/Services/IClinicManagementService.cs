using System.Collections.Generic;
using App.Models;

namespace App.Services
{
	public interface IClinicManagementService
	{
		IEnumerable<Clinic> GetClinics();
	}
}