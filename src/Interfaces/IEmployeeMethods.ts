/**
 * This interface contains methods that we will use for employee management system
 */
namespace EmployeeMethods {
    export interface IEmployeeMethods {
        addEmployee: (newEmployee:any) => void; 
        updateEmployee: (employee:any, index:number) => void;
    }
}