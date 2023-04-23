import * as ele from '../Elements/element.js';
import { ADD } from '../Constants/constant.js';
const showToastMessage = (msg) => {
    let message = ele.TOAST_MSG_DIV;
    let toastTrigger = ele.SUBMIT_BTN;
    const Toast = ele.TOAST_DIV;
    if (msg === ADD) {
        message.innerHTML = 'Employee added successfully.';
    }
    if (toastTrigger) {
        const toast = new bootstrap.Toast(Toast);
        toast.show();
        setTimeout(() => { location.reload(); }, 1000);
    }
};
export { showToastMessage };
