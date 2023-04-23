import { EMPLOYEE } from "../Constants/constant.js";

let base64Img:string;

const getUnparsedRecords = ():string|null => {
    return localStorage.getItem(EMPLOYEE);
}

const getParsedRecords = ():any => {
    return JSON.parse(localStorage.getItem(EMPLOYEE)!);
}

const setRecords = (records:any):void => {
    localStorage.setItem(EMPLOYEE, JSON.stringify(records));
}

const checkEmployeeId = (empId: string): boolean => {
    let res: boolean = false;
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
}

const findEmployee = (empId: string): number => {
    let records = getParsedRecords();
    for (let i = 0; i < records.length; i++) {
        if (empId === records[i]._id) {
            return i;
        }
    }
    return -1;
}

export {
    getUnparsedRecords, getParsedRecords, setRecords, checkEmployeeId, findEmployee
}