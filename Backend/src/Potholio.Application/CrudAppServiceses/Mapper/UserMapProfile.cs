using AutoMapper;
using Potholio.Authorization.Users;
using Potholio.CrudAppServiceses.Citizens.DTo;
using Potholio.CrudAppServiceses.Reports.DTo;
using Potholio.Domain.Incidents;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Potholio.CrudAppServiceses.Mapper
{
    public class UserMapProfile : Profile
    {
        public UserMapProfile()
        {
            //CreateMap<CitizenRegisterDto, User>().ForMember(u => u.Id, opt => opt.Ignore());
            CreateMap<IncidentDto, Incident>();
        }
    }
}
