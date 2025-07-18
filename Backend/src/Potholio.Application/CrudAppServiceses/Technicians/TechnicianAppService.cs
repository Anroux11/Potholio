﻿using Abp.Application.Services;
using Abp.Domain.Repositories;
using Potholio.CrudAppServiceses.Technicians.Dto;
using Potholio.Domain.Technicians;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Potholio.CrudAppServiceses.Technicians
{
    public class TechnicianAppService : AsyncCrudAppService<Technician, TechnicianDto, Guid>
    {
        public TechnicianAppService(IRepository<Technician, Guid> repository) : base(repository)
        {
        }
    }
}
