namespace SMS.Services.Product
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public interface IProductsService
    {
        void Create(string name, decimal price);
    }
}
