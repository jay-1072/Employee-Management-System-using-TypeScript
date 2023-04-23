///<reference path='../Interfaces/IEmployeeDetails.ts' />
///<reference path='../Interfaces/IEmployeeMethods.ts' />

import * as fun from "../Functions/BasicFunctions.js"

export class Employee implements EmployeeDetails.IEmployeeDetails, EmployeeMethods.IEmployeeMethods {
    _id: string;
    _profile: string;
    _about: string;
    _firstName: string;
    _middleName: string;
    _lastName: string;
    _gender: string;
    _age: number;
    _email: string;
    _designation: string;
    _skills: string;
    _experience: number;
    _salary: string;

    constructor(_id: string, _profile: string, _about: string, _firstName: string, _middleName: string, _lastName: string, _gender: string, _age: number, _email: string, _designation: string, _skills: string, _experience: number, _salary: string) {
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

    addEmployee = (newEmployee: Employee): void => {
        let records:Employee[] = [];

        if (fun.getUnparsedRecords() !== null) {
            records = fun.getParsedRecords();
        }

        records.push(newEmployee);

        fun.setRecords(records);
        Employee.viewEmployees();
    }

    updateEmployee = (employee: Employee, index: number): void => {
        let records = fun.getParsedRecords();
        records[index] = employee;
        fun.setRecords(records);
        Employee.viewEmployees();
    }

    static viewEmployees = () => {
        let records: Employee[];
        let html: string = "";
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

            document.getElementById('tblBody')!.innerHTML = html;
        }
    }

    static deleteEmployee = (index: number): void => {
        let records = fun.getParsedRecords();
        records.splice(index, 1);
        fun.setRecords(records);
        Employee.viewEmployees();
    }
}