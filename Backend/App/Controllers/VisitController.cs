using System.Collections.Generic;
using App.Models;
using App.Services;
using Microsoft.AspNetCore.Mvc;

namespace App.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class VisitController : ControllerBase
	{
		private readonly IVisitManagementService _visitManagementService;

		public VisitController(IVisitManagementService visitManagementService)
		{
			_visitManagementService = visitManagementService;
		}

		[HttpPost]
		public ActionResult Add(Visit? visit)
		{
			if (visit == null)
			{
				return BadRequest();
			}

			_visitManagementService.Add(visit);
			return Ok();
		}

		[HttpGet("{id}")]
		public ActionResult<Visit> GetVisit(string id)
		{
			var visit = _visitManagementService.GetVisit(id);
			if (visit == null)
			{
				return NotFound();
			}

			return Ok(visit);
		}

		[HttpGet]
		public ActionResult<IEnumerable<Visit>> GetVisits()
		{
			return Ok(_visitManagementService.GetVisits());
		}

		[HttpDelete("{id}")]
		public ActionResult RemoveVisit(string id)
		{
			var visit = _visitManagementService.GetVisit(id);
			if (visit == null)
			{
				return NotFound();
			}

			_visitManagementService.RemoveVisit(visit);
			return Ok();
		}
	}
}
