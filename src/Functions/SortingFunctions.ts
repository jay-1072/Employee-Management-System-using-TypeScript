import { Employee } from "../Classes/Employee.js";
import * as fun from "../Functions/BasicFunctions.js"
import { ASC, ID, FNAME, LNAME, SALARY, EXPERIENCE, AGE, GENDER } from "../Constants/constant.js";

const commonSort = (sortType: string, sortField:string) => {

    if(fun.getUnparsedRecords() !== null) {
        const records = fun.getParsedRecords();

        if (sortType === ASC) {
            records.sort((e1: any, e2: any) => {

                switch(sortField) {
                    case ID:
                        return e1._id < e2._id ? -1 : 0;
                        break;
                    case FNAME:
                        return e1._firstName.toLowerCase() < e2._firstName.toLowerCase() ? -1 : 0;
                        break;
                    case LNAME:
                        return e1._lastName.toLowerCase() < e2._lastName.toLowerCase() ? -1 : 0;
                        break;
                    case SALARY:
                        return e1._salary < e2._salary ? -1 : 0;
                        break;
                    case EXPERIENCE:
                        return e1._experience < e2._experience ? -1 : 0;
                        break;
                    case AGE:
                        return e1._age < e2._age ? -1 : 0;
                        break;
                    case GENDER:
                        return e1._gender < e2._gender ? -1 : 0;
                        break;
                }
            })
        }
        else {
            records.sort((e1: any, e2: any) => {
                
                switch(sortField) {
                    case ID:
                        return e1._id > e2._id ? -1 : 0;
                        break;
                    case FNAME:
                        return e1._firstName.toLowerCase() > e2._firstName.toLowerCase() ? -1 : 0;
                        break;
                    case LNAME:
                        return e1._lastName.toLowerCase() > e2._lastName.toLowerCase() ? -1 : 0;
                        break;
                    case SALARY:
                        return e1._salary > e2._salary ? -1 : 0;
                        break;
                    case EXPERIENCE:
                        return e1._experience > e2._experience ? -1 : 0;
                        break;
                    case AGE:
                        return e1._age > e2._age ? -1 : 0;
                        break;
                    case GENDER:
                        return e1._gender > e2._gender ? -1 : 0;
                        break;
                }
            })
        }

        fun.setRecords(records);
        Employee.viewEmployees();
    }
}

export {
    commonSort
}