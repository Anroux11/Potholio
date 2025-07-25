﻿using Abp.Domain.Entities.Auditing;
using System;

namespace Potholio.Domain.Addresses
{
    public class Address : FullAuditedEntity<Guid>
    {
        public virtual string City { get; set; }
        public virtual string Province { get; set; }
    }
}
