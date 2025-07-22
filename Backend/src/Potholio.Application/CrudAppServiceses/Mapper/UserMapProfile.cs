using AutoMapper;
using Potholio.CrudAppServiceses.Addresses.Dto;
using Potholio.CrudAppServiceses.MunicipalityAdmin.Dto;
using Potholio.CrudAppServiceses.Reports.DTo;
using Potholio.Domain.Addresses;
using Potholio.Domain.Incidents;
using Potholio.Domain.Municipalities;

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

            CreateMap<Municipality, MunicipalityDto>()
                .ForMember(dto => dto.Address, opt => opt.MapFrom(src => src.Address));
        }
    }
}
