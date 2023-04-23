const EMPLOYEE:string = 'EmployeeRecords';
const ASC:string = 'ASC';
const Regexp = /^\S*$/;
const emailRegex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/;
const idRegex = /^[a-zA-Z0-9]*$/;
const numberRegex = /^[0-9]+$/
const ID = 'id', FNAME='fname', LNAME='lname', SALARY='salary', EXPERIENCE='experience', AGE='age', GENDER='gender';
const ADD = 'Add';

export {
    EMPLOYEE, ASC, Regexp, emailRegex, idRegex, numberRegex, ID, FNAME, LNAME, SALARY, EXPERIENCE, AGE, GENDER,
    ADD
}