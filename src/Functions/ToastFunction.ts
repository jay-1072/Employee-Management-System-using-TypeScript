import * as ele from '../Elements/element.js'
import { ADD } from '../Constants/constant.js';
declare var bootstrap: any;

const showToastMessage = (msg: string) => {

    let message:HTMLElement = ele.TOAST_MSG_DIV;
    let toastTrigger:HTMLElement = ele.SUBMIT_BTN;
    const Toast:HTMLElement = ele.TOAST_DIV;

    if (msg === ADD) {
        message.innerHTML = 'Employee added successfully.';
    }

    if (toastTrigger) {
        const toast = new bootstrap.Toast(Toast);
        toast.show();
        setTimeout(() => { location.reload() }, 1000);
    }
}

export {
    showToastMessage
}