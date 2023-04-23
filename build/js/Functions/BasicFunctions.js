import { EMPLOYEE } from "../Constants/constant.js";
let base64Img;
const getUnparsedRecords = () => {
    return localStorage.getItem(EMPLOYEE);
};
const getParsedRecords = () => {
    return JSON.parse(localStorage.getItem(EMPLOYEE));
};
const setRecords = (records) => {
    localStorage.setItem(EMPLOYEE, JSON.stringify(records));
};
const checkEmployeeId = (empId) => {
    let res = false;
    if (getUnparsedRecords() != null) {
        const records = getParsedRecords();
        for (let i = 0; i < records.length; i++) {
            if (empId === records[i]._id) {
                res = true;
                break;
            }
        }
    }
    return res;
};
const findEmployee = (empId) => {
    let records = getParsedRecords();
    for (let i = 0; i < records.length; i++) {
        if (empId === records[i]._id) {
            return i;
        }
    }
    return -1;
};
export { getUnparsedRecords, getParsedRecords, setRecords, checkEmployeeId, findEmployee };
