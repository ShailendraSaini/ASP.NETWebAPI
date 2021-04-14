using System.Collections.Generic;

namespace MvcApplication1.Models
{
    interface IEmployeeRepository
    {
        IEnumerable<Employee> GetAll();

        /// <summary>
        ///      Interface Method to fetch employee details by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Employee Get(int id);

        /// <summary>
        ///     Interface method to add employee record
        /// </summary>
        /// <param name="employee"></param>
        /// <returns></returns>
        Employee Add(Employee employee);

        /// <summary>
        ///     Interface method to update employee record
        /// </summary>
        /// <param name="employee"></param>
        /// <returns></returns>
        Employee Update(Employee employee);

        /// <summary>
        ///     Interface method to delete employee record by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        IEnumerable<Employee> Delete(int id);
    }
}
