using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Potholio.Domain.Technicians
{
    public class Technician : FullAuditedEntity<Guid>
    {
        public virtual string Name { get; set; }
        public virtual string Email { get; set; }
        public virtual string Password { get; set; }
        public virtual int ContactNumber { get; set; }
    }
}
