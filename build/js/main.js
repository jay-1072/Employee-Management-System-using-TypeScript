import { Employee } from "./Classes/Employee.js";
import { valid, setInitialStyle } from "./Functions/ValidationFunction.js";
import { showToastMessage } from "./Functions/ToastFunction.js";
import { checkEmployeeId } from "./Functions/BasicFunctions.js";
import { commonSort } from "./Functions/SortingFunctions.js";
import * as ele from './Elements/element.js';
let employeeObj;
let base64 = '';
(() => {
    Employee.viewEmployees();
})();
const submitBtn = document.getElementById('submitBtn');
submitBtn.onclick = (event) => {
    let eId = ele.EMP_ID.value.trim();
    let eProfile = base64.length === 0 ? '' : base64;
    let eAbout = ele.EMP_ABOUT.value.trim();
    let eFirstName = ele.EMP_FIRST_NAME.value.trim();
    let eMiddleName = ele.EMP_MIDDLE_NAME.value.trim();
    let eLastName = ele.EMP_LAST_NAME.value.trim();
    let eGender = ele.EMP_GENDER.value.trim();
    let eAge = parseInt(ele.EMP_AGE.value);
    let eEmail = ele.EMP_EMAIL.value.trim();
    let eDesignation = ele.EMP_DESIGNATION.value.trim();
    let eSkills = ele.EMP_SKILLS.value.trim();
    let eExperience = parseFloat(ele.EMP_EXPERIENCE.value.trim());
    let eSalary = ele.EMP_SALARY.value.trim();
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
};
for (let element of ele.SORT_ELEMENTS) {
    element.addEventListener('click', function (event) {
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
let profileInput = document.getElementById('empProfile');
profileInput.addEventListener('change', function (event) {
    const image = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.addEventListener('load', () => {
        base64 = reader.result;
    });
});
const modalClose = document.getElementById("modalClose");
modalClose.onclick = () => {
    let empFor = document.getElementById("employeeForm");
    location.reload();
};
const formReset = document.getElementById("formReset");
formReset.onclick = () => {
    setInitialStyle();
};
