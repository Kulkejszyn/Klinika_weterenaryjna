using System.Collections.Generic;
using App.Models;
using App.Services;
using Microsoft.AspNetCore.Mvc;

namespace App.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	public class ClinicController : ControllerBase
	{
		private readonly IClinicManagementService _clinicManagementService;

		public ClinicController(IClinicManagementService clinicManagementService)
		{
			_clinicManagementService = clinicManagementService;
		}

		[HttpGet]
		public ActionResult<IEnumerable<Clinic>> Get()
		{
			return Ok(_clinicManagementService.GetClinics());
		}
	}
}
