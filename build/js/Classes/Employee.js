///<reference path='../Interfaces/IEmployeeDetails.ts' />
///<reference path='../Interfaces/IEmployeeMethods.ts' />
import * as fun from "../Functions/BasicFunctions.js";
export class Employee {
    constructor(_id, _profile, _about, _firstName, _middleName, _lastName, _gender, _age, _email, _designation, _skills, _experience, _salary) {
        this.addEmployee = (newEmployee) => {
            let records = [];
            if (fun.getUnparsedRecords() !== null) {
                records = fun.getParsedRecords();
            }
            records.push(newEmployee);
            fun.setRecords(records);
            Employee.viewEmployees();
        };
        this.updateEmployee = (employee, index) => {
            let records = fun.getParsedRecords();
            records[index] = employee;
            fun.setRecords(records);
            Employee.viewEmployees();
        };
        this._id = _id;
        this._profile = _profile;
        this._about = _about;
        this._firstName = _firstName;
        this._middleName = _middleName;
        this._lastName = _lastName;
        this._gender = _gender;
        this._age = _age;
        this._email = _email;
        this._designation = _designation;
        this._skills = _skills;
        this._experience = _experience;
        this._salary = _salary;
    }
}
Employee.viewEmployees = () => {
    let records;
    let html = "";
    if (fun.getUnparsedRecords() !== null) {
        records = fun.getParsedRecords();
        for (let i = 0; i < records.length; i++) {
            html += `<tr>`;
            html += `<td class="table-data text-center">` + records[i]._id + `</td>`;
            html += `<td class="text-center">` + `<img class="emp-img" src="${records[i]._profile}">` + `</td>`;
            html += `<td class="table-data text-center text-truncate">` + records[i]._about + `</td>`;
            html += `<td class="table-data text-center text-truncate">` + records[i]._firstName + `</td>`;
            html += `<td class="table-data text-center text-truncate">` + records[i]._lastName + `</td>`;
            html += `<td class="table-data text-center">` + records[i]._gender + `</td>`;
            html += `<td class="table-data text-center">` + records[i]._age + `</td>`;
            html += `<td class="table-data text-center text-truncate">` + records[i]._email + `</td>`;
            html += `<td class="table-data text-center text-truncate">` + records[i]._designation + `</td>`;
            html += `<td class="table-data text-center text-truncate">` + records[i]._skills + `</td>`;
            html += `<td class="table-data text-center">` + records[i]._experience + `</td>`;
            html += `<td class="table-data text-center">` + records[i]._salary + `&nbsp;&nbsp;<i class="fa fa-indian-rupee-sign"></i>` + `</td>`;
            html += `<td class="table-data text-center">` + `<button onclick="location.href='viewEmployee.html?id=${records[i]._id}'" class="btn btn-light text-center viewIcon"><i class="fa fa-light fa-eye"></i></button>` + `</td>`;
            html += `</tr>`;
        }
        document.getElementById('tblBody').innerHTML = html;
    }
};
Employee.deleteEmployee = (index) => {
    let records = fun.getParsedRecords();
    records.splice(index, 1);
    fun.setRecords(records);
    Employee.viewEmployees();
};
