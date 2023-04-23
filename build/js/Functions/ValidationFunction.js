import { emailRegex, idRegex, numberRegex } from "../Constants/constant.js";
import * as ele from '../Elements/element.js';
const setInitialStyle = () => {
    ele.EID_ERROR.innerHTML = "";
    document.getElementById('empId').style = ele.EMP_ID;
    ele.EABOUT_ERROR.innerHTML = "";
    document.getElementById("empAbout").style = ele.EMP_ABOUT;
    ele.EPROFILE_ERROR.innerHTML = "";
    document.getElementById("empProfile").style = ele.EMP_PROFILE;
    ele.EFNAME_ERROR.innerHTML = "";
    document.getElementById("empFname").style = ele.EMP_FIRST_NAME;
    ele.EMNAME_ERROR.innerHTML = "";
    document.getElementById("empMname").style = ele.EMP_MIDDLE_NAME;
    ele.ELNAME_ERROR.innerHTML = "";
    document.getElementById("empLname").style = ele.EMP_LAST_NAME;
    ele.EEMAIl_ERROR.innerHTML = "";
    document.getElementById("empEmail").style = ele.EMP_EMAIL;
    ele.EDESIGNATION_ERROR.innerHTML = "";
    document.getElementById("empDesignation").style = ele.EMP_DESIGNATION;
    ele.ESKILLS_ERROR.innerHTML = "";
    document.getElementById("empSkills").style = ele.EMP_SKILLS;
    ele.EAGE_ERROR.innerHTML = "";
    ele.EEXPERIENCE_ERROR.innerHTML = "";
    ele.ESALARY_ERROR.innerHTML = "";
    document.getElementById("empSalary").style = ele.EMP_SALARY;
};
const valid = (eObj) => {
    setInitialStyle();
    let flag = true;
    let profileExtention = eObj._profile.split(";")[0].split("/")[1];
    // Id validation
    if (eObj._id == '') {
        ele.EID_ERROR.innerHTML = "please enter employee id";
        ele.EMP_ID.style.border = "1px solid red";
        flag = false;
    }
    else if (!idRegex.test(eObj._id)) {
        ele.EID_ERROR.innerHTML = "only alphanumeric id is allowed";
        ele.EMP_ID.style.border = "1px solid red";
        flag = false;
    }
    else if (eObj._id.length !== 8) {
        ele.EID_ERROR.innerHTML = "Employee id must contain 8 alphanumeric character only";
        ele.EMP_ID.style.border = "1px solid red";
        flag = false;
    }
    // About validation
    if (eObj._about.length == 0) {
        ele.EABOUT_ERROR.innerHTML = "please enter employee description";
        ele.EMP_ABOUT.style.border = "1px solid red";
        flag = false;
    }
    else if (eObj._about.length > 150) {
        ele.EABOUT_ERROR.innerHTML = "employee description should not be more than 150 character long";
        ele.EMP_ABOUT.style.border = "1px solid red";
        flag = false;
    }
    // Profile validation
    if (eObj._profile.length === 0) {
        ele.EPROFILE_ERROR.innerHTML = "please add employee profile";
        ele.EMP_PROFILE.style.border = "1px solid red";
        flag = false;
    }
    else if (profileExtention != 'png' && profileExtention != 'jpeg') {
        ele.EPROFILE_ERROR.innerHTML = "Only .png, .jpg and .jpeg images are allowed";
        ele.EMP_PROFILE.style.border = "1px solid red";
        flag = false;
    }
    // First name validation
    if (eObj._firstName == '') {
        ele.EFNAME_ERROR.innerHTML = "please enter first name";
        ele.EMP_FIRST_NAME.style.border = "1px solid red";
        flag = false;
    }
    else if (eObj._firstName.length > 20) {
        ele.EFNAME_ERROR.innerHTML = "first name should not contain more than 20 character";
        ele.EMP_FIRST_NAME.style.border = "1px solid red";
        flag = false;
    }
    // Middle name validation
    if (eObj._middleName == '') {
        ele.EMNAME_ERROR.innerHTML = "please enter middle name";
        ele.EMP_MIDDLE_NAME.style.border = "1px solid red";
        flag = false;
    }
    else if (eObj._middleName.length > 20) {
        ele.EMNAME_ERROR.innerHTML = "middle name should not contain more than 20 character";
        ele.EMP_MIDDLE_NAME.style.border = "1px solid red";
        flag = false;
    }
    // Last name validation
    if (eObj._lastName == '') {
        ele.ELNAME_ERROR.innerHTML = "please enter last name";
        ele.EMP_LAST_NAME.style.border = "1px solid red";
        flag = false;
    }
    else if (eObj._lastName.length > 20) {
        ele.ELNAME_ERROR.innerHTML = "last name should not contain more than 20 character";
        ele.EMP_LAST_NAME.style.border = "1px solid red";
        flag = false;
    }
    // Email validation
    if (eObj._email == '') {
        ele.EEMAIl_ERROR.innerHTML = "please enter email id";
        ele.EMP_EMAIL.style.border = "1px solid red";
        flag = false;
    }
    else if (!emailRegex.test(eObj._email)) {
        ele.EEMAIl_ERROR.innerHTML = "please enter valid email id";
        ele.EMP_EMAIL.style.border = "1px solid red";
        flag = false;
    }
    else if (eObj._email.length > 50) {
        ele.EEMAIl_ERROR.innerHTML = "email id should not contain more than 50 character";
        ele.EMP_EMAIL.style.border = "1px solid red";
        flag = false;
    }
    // Designation validation
    if (eObj._designation == '') {
        ele.EDESIGNATION_ERROR.innerHTML = "please enter employee designation";
        ele.EMP_DESIGNATION.style.border = "1px solid red";
        flag = false;
    }
    else if (eObj._designation.length > 20) {
        ele.EDESIGNATION_ERROR.innerHTML = "designation should not contain more than 20 character";
        ele.EMP_DESIGNATION.style.border = "1px solid red";
        flag = false;
    }
    // Skill validation
    if (!eObj._skills) {
        ele.ESKILLS_ERROR.innerHTML = "please enter employee skills";
        ele.EMP_SKILLS.style.border = "1px solid red";
        flag = false;
    }
    // Age validation
    if (!eObj._age) {
        ele.EAGE_ERROR.innerHTML = "please enter employee age";
        flag = false;
    }
    // Experience validation
    if (!eObj._experience) {
        ele.EEXPERIENCE_ERROR.innerHTML = "please enter employee experience";
        flag = false;
    }
    // Salary validation
    if (!eObj._salary) {
        ele.ESALARY_ERROR.innerHTML = "please enter employee salary";
        ele.EMP_SALARY.style.border = "1px solid red";
        flag = false;
    }
    else if (!numberRegex.test(eObj._salary)) {
        ele.ESALARY_ERROR.innerHTML = "Only digits are allowed";
        ele.EMP_SALARY.style.border = "1px solid red";
        flag = false;
    }
    else if (eObj._salary.length >= 7 || eObj._salary.length < 5) {
        ele.ESALARY_ERROR.innerHTML = "salary must be in between 10000 and 999999";
        ele.EMP_SALARY.style.border = "1px solid red";
        flag = false;
    }
    return flag;
};
export { valid, setInitialStyle };
