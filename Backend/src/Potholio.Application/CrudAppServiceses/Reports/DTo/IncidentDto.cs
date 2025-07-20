using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Potholio.Domain.Addresses;
using Potholio.Domain.Incidents;
using System;

namespace Potholio.CrudAppServiceses.Reports.DTo
{
    [AutoMap(typeof(Incident))]
    public class IncidentDto : EntityDto<Guid>
    {
        public string? description { get; set; }
        public string status { get; set; }
        public string? imageUrl { get; set; }
        public virtual decimal Latitude { get; set; }
        public virtual decimal Longitude { get; set; }
        public Address incidentAddress { get; set; }
        public string MunicipalityName { get; set; }
        public Guid? MunicipalityId { get; set; }
        public long ReportingUserId { get; set; }
        public Guid? ServiceProviderId { get; set; }
        public string? ServiceProviderName { get; set; }
    }
}
