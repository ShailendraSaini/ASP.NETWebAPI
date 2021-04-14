using System.Collections.Generic;
using System.Web.Http;
using MvcApplication1.Models;

namespace MvcApplication1.Controllers
{
    public class EmployeeController : ApiController
    {
        static readonly IEmployeeRepository employeeRepository = new EmployeeRepository();

        /// <summary>
        ///  //GET all employees
        /// </summary>
        /// <returns></returns>

        //api/employee

        public IEnumerable<Employee> GetAllEmployees()
        {
            return employeeRepository.GetAll();
        }


        /// <summary>
        ///     GET a particular employee
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>

        //api/employee/2
        public Employee GetEmployee(int id)
        {
            return employeeRepository.Get(id); ;

        }

        /// <summary>
        ///     POST (insert) an employee
        /// </summary>
        /// <param name="employee"></param>
        /// <returns></returns>

        //api/employee/
        public Employee PostEmployee(Employee employee)
        {
            return employeeRepository.Add(employee);
        }

        /// <summary>
        ///     PUT (update) an employee
        /// </summary>
        /// <param name="id"></param>
        /// <param name="employee"></param>
        /// <returns></returns>

        //api/employee/{id}
        public Employee PutEmployee(int id, Employee employee)
        {
            employee.id = id;
            return employeeRepository.Update(employee);

        }

        /// <summary>
        ///     DELETE an employee
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>

        //api/employee/{id}
        public IEnumerable<Employee> DeleteEmployee(int id)
        {
            return employeeRepository.Delete(id);

        }
    }
}
