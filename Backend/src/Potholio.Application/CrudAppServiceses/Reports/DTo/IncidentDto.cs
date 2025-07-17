using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Microsoft.AspNetCore.Http;
using Potholio.Domain.Geolocations;
using Potholio.Domain.Incidents;
using Potholio.Domain.Municipalities;
using Potholio.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Potholio.CrudAppServiceses.Reports.DTo
{
    [AutoMap(typeof(Incident))]
    public class IncidentDto : EntityDto<Guid>
    {
        public string description { get; set; }
        public string imageUrl { get; set; }
        public virtual decimal Latitude { get; set; }
        public virtual decimal Longitude { get; set; }
        public Guid MunicipalityId { get; set; }
        public long ReportingUserId { get; set; }
    }
}
