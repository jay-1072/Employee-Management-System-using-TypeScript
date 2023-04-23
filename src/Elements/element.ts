const TOAST_MSG_DIV:HTMLElement = <HTMLDivElement>document.getElementById('statusMessage')!;
const SUBMIT_BTN:HTMLElement = <HTMLButtonElement>document.getElementById('submitBtn')!;
const TOAST_DIV:HTMLElement = <HTMLDivElement>document.getElementById('Toast')!;

// Input Elements
const EMP_ID:HTMLElement = <HTMLInputElement>document.getElementById('empId')!;
const EMP_ABOUT:HTMLElement = <HTMLInputElement>document.getElementById('empAbout');
const EMP_PROFILE:HTMLElement = <HTMLInputElement>document.getElementById('empProfile')!;
const EMP_FIRST_NAME:HTMLElement = <HTMLInputElement>document.getElementById('empFname')!;
const EMP_MIDDLE_NAME:HTMLElement = <HTMLInputElement>document.getElementById('empMname')!;
const EMP_LAST_NAME:HTMLElement = <HTMLInputElement>document.getElementById('empLname')!;
const EMP_GENDER:HTMLElement = <HTMLInputElement>document.getElementById('empGender')!;
const EMP_AGE:HTMLElement = <HTMLInputElement>document.getElementById('ageValue')!;
const EMP_EMAIL:HTMLElement = <HTMLInputElement>document.getElementById('empEmail')!;
const EMP_DESIGNATION:HTMLElement = <HTMLInputElement>document.getElementById('empDesignation')!;
const EMP_SKILLS:HTMLElement = <HTMLInputElement>document.getElementById('empSkills')!;
const EMP_EXPERIENCE:HTMLElement = <HTMLInputElement>document.getElementById('experienceValue')!;
const EMP_SALARY:HTMLElement = <HTMLInputElement>document.getElementById('empSalary')!;

// Error Elements
const EID_ERROR:HTMLElement = <HTMLElement>document.getElementById("eIdError")!;
const EABOUT_ERROR:HTMLElement = <HTMLElement>document.getElementById("eAboutError")!;
const EPROFILE_ERROR:HTMLElement = <HTMLElement>document.getElementById("eProfileError")!;
const EFNAME_ERROR:HTMLElement = <HTMLElement>document.getElementById("eFnameError")!;
const EMNAME_ERROR:HTMLElement = <HTMLElement>document.getElementById("eMnameError")!;
const ELNAME_ERROR:HTMLElement = <HTMLElement>document.getElementById("eLnameError")!;
const EEMAIl_ERROR:HTMLElement = <HTMLElement>document.getElementById("eEmailError")!;
const EDESIGNATION_ERROR:HTMLElement = <HTMLElement>document.getElementById("eDesignationError")!;
const ESKILLS_ERROR:HTMLElement = <HTMLElement>document.getElementById("eSkillsError")!;
const EAGE_ERROR:HTMLElement = <HTMLElement>document.getElementById("eAgeError")!;
const ESALARY_ERROR:HTMLElement = <HTMLElement>document.getElementById("eSalaryError")!;
const EEXPERIENCE_ERROR:HTMLElement = <HTMLElement>document.getElementById("eExperienceError")!;

// Sort Elements
const SORT_ELEMENTS:HTMLCollection = <HTMLCollection>document.getElementsByClassName('sort');

export {
    TOAST_MSG_DIV, SUBMIT_BTN, TOAST_DIV, EMP_ID, EMP_ABOUT, EMP_PROFILE, EMP_FIRST_NAME, EMP_MIDDLE_NAME, EMP_LAST_NAME,
    EMP_GENDER, EMP_AGE, EMP_EMAIL, EMP_DESIGNATION, EMP_SKILLS, EMP_EXPERIENCE, EMP_SALARY, 

    EID_ERROR, EABOUT_ERROR, EPROFILE_ERROR, EFNAME_ERROR, EMNAME_ERROR, ELNAME_ERROR, EEMAIl_ERROR, EDESIGNATION_ERROR, ESKILLS_ERROR,  EAGE_ERROR,
    ESALARY_ERROR, EEXPERIENCE_ERROR,

    SORT_ELEMENTS
}