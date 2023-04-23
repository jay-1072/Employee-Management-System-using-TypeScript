import { Employee } from "./Classes/Employee.js";
import { valid, setInitialStyle } from "./Functions/ValidationFunction.js";
import { showToastMessage } from "./Functions/ToastFunction.js";
import { checkEmployeeId } from "./Functions/BasicFunctions.js";
import { commonSort } from "./Functions/SortingFunctions.js"
import * as ele from './Elements/element.js';

let employeeObj: Employee;
let base64: string = '';

(() => {
    Employee.viewEmployees();
})();

const submitBtn = <HTMLInputElement>document.getElementById('submitBtn');

submitBtn.onclick = (event): void => {
    let eId:string = (ele.EMP_ID as HTMLInputElement).value.trim();
    let eProfile:string = base64.length === 0 ? '' : base64;
    let eAbout:string = (ele.EMP_ABOUT as HTMLInputElement).value.trim();
    let eFirstName:string = (ele.EMP_FIRST_NAME as HTMLInputElement).value.trim();
    let eMiddleName:string = (ele.EMP_MIDDLE_NAME as HTMLInputElement).value.trim();
    let eLastName:string = (ele.EMP_LAST_NAME as HTMLInputElement).value.trim();
    let eGender:string = (ele.EMP_GENDER as HTMLInputElement).value.trim();
    let eAge:number = parseInt((ele.EMP_AGE as HTMLInputElement).value);
    let eEmail:string = (ele.EMP_EMAIL as HTMLInputElement).value.trim();
    let eDesignation:string = (ele.EMP_DESIGNATION as HTMLInputElement).value.trim();
    let eSkills:string = (ele.EMP_SKILLS as HTMLInputElement).value.trim();
    let eExperience:number = parseFloat((ele.EMP_EXPERIENCE as HTMLInputElement).value.trim());
    let eSalary:string = (ele.EMP_SALARY as HTMLInputElement).value.trim();

    employeeObj = new Employee(eId, eProfile, eAbout, eFirstName, eMiddleName, eLastName, eGender, eAge, eEmail, eDesignation, eSkills, eExperience, eSalary);

    if (!valid(employeeObj)) {
        event.preventDefault();
    }
    else {
        if (!checkEmployeeId(eId)) {
            employeeObj.addEmployee(employeeObj);
            event.preventDefault();
            showToastMessage('Add');
        }
        else {
            ele.EID_ERROR.innerHTML = "Employee id already exist";
            event.preventDefault();
        }
    }
}

for (let element of ele.SORT_ELEMENTS) {
    element.addEventListener('click', function (this: any, event) {
        let eleId = this.id;
        switch (eleId) {
            case "sortById_asc":
                commonSort('ASC', 'id');
                break;
            case "sortById_desc":
                commonSort('DESC', 'id');
                break;
            case "sortByFname_asc":
                commonSort('ASC', 'fname');
                break;
            case "sortByFname_desc":
                commonSort('DESC', 'fname');
                break;
            case "sortByLname_asc":
                commonSort('ASC', 'lname');
                break;
            case "sortByLname_desc":
                commonSort('DESC', 'lname');
                break;
            case "sortByGender_asc":
                commonSort('ASC', 'gender');
                break;
            case "sortByGender_desc":
                commonSort('DESC', 'gender');
                break;
            case "sortByAge_asc":
                commonSort('ASC', 'age');
                break;
            case "sortByAge_desc":
                commonSort('DESC', 'age');
                break;
            case "sortByExperience_asc":
                commonSort('ASC', 'experience');
                break;
            case "sortByExperience_desc":
                commonSort('DESC', 'experience');
                break;
            case "sortBySalary_asc":
                commonSort('ASC', 'salary');
                break;
            case "sortBySalary_desc":
                commonSort('DESC', 'salary');
                break;
        }
    });
}

let profileInput: any = document.getElementById('empProfile');
profileInput.addEventListener('change', function (event: any) {
    const image = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(image);

    reader.addEventListener('load', () => {
        base64 = reader.result as string;
    });
});

const modalClose = document.getElementById("modalClose");
modalClose!.onclick = (): void => {
    let empFor = <HTMLFormElement>document.getElementById("employeeForm");
    location.reload();
}

const formReset:HTMLElement = <HTMLInputElement>document.getElementById("formReset");
formReset.onclick = () => {
    setInitialStyle();
}