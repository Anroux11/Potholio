using AutoMapper;
using Potholio.CrudAppServiceses.Addresses.Dto;
using Potholio.CrudAppServiceses.Reports.DTo;
using Potholio.Domain.Addresses;
using Potholio.Domain.Incidents;

namespace Potholio.CrudAppServiceses.Mapper
{
    public class UserMapProfile : Profile
    {
        public UserMapProfile()
        {
            CreateMap<IncidentDto, Incident>();
            CreateMap<Incident, IncidentDto>()
                .ForMember(dto => dto.incidentAddress, opt => opt.MapFrom(src => src.incidentAddress));

            CreateMap<Address, AddressDto>();
            CreateMap<AddressDto, Address>();
        }
    }
}
