import { findEmployee } from "./Functions/BasicFunctions.js";
let url;
let eid;
let indx;
let Record;
let base64Img;
let eImage = document.getElementById("profile");
eImage.addEventListener("change", function (event) {
    const image = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.addEventListener("load", () => {
        base64Img = reader.result;
    });
});
const editBtn = (document.getElementById("editBtn"));
editBtn.onclick = () => {
    document.getElementById("editBtn").setAttribute("hidden", "true");
    document.getElementById("updateBtn").removeAttribute("hidden");
    document.getElementById("profile").disabled = false;
    document.getElementById("about").innerHTML;
    document.getElementById("fname").disabled = false;
    document.getElementById("mname").disabled = false;
    document.getElementById("lname").disabled = false;
    document.getElementById("gender").disabled = false;
    document.getElementById("email").disabled = false;
    document.getElementById("experience").disabled = false;
    document.getElementById("age").disabled = false;
    document.getElementById("skills").disabled = false;
    document.getElementById("salary").disabled = false;
    document.getElementById("designation").disabled = false;
};
const updateBtn = (document.getElementById("updateBtn"));
updateBtn.onclick = () => {
    Record = JSON.parse(localStorage.getItem("EmployeeRecords"));
    let id = document.getElementById("id").value;
    let profile = document.getElementById("profile").value;
    let about = document.getElementById("about").innerHTML;
    let fname = document.getElementById("fname").value;
    let mname = document.getElementById("mname").value;
    let lname = document.getElementById("lname").value;
    let gender = document.getElementById("gender").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("ageVal").value;
    let experience = document.getElementById("experienceVal").value;
    let skills = document.getElementById("skills").value;
    let salary = document.getElementById("salary").value;
    let designation = document.getElementById("designation").value;
    Record[indx]._id = id;
    Record[indx]._profile = profile != "" ? base64Img : Record[indx]._profile;
    Record[indx]._about = about;
    Record[indx]._firstName = fname;
    Record[indx]._middleName = mname;
    Record[indx]._lastName = lname;
    Record[indx]._gender = gender;
    Record[indx]._email = email;
    Record[indx]._age = age;
    Record[indx]._experience = experience;
    Record[indx]._skills = skills;
    Record[indx]._salary = salary;
    Record[indx]._designation = designation;
    localStorage.setItem("EmployeeRecords", JSON.stringify(Record));
    setTimeout(() => {
        location.href = "index.html";
    }, 500);
};
const deleteBtn = (document.getElementById("deleteBtn"));
deleteBtn.onclick = () => {
    if (confirm('Are you sure you want to delete this record?')) {
        Record = JSON.parse(localStorage.getItem('EmployeeRecords'));
        Record.splice(indx, 1);
        localStorage.setItem('EmployeeRecords', JSON.stringify(Record));
        location.href = "index.html";
    }
};
(function () {
    url = new URL(window.location.href);
    eid = url.searchParams.get("id");
    indx = findEmployee(eid);
    Record = JSON.parse(localStorage.getItem("EmployeeRecords"));
    document.getElementById("id").value = Record[indx]._id;
    document.getElementById("emp-profile-picture").src = Record[indx]._profile;
    document.getElementById("about").innerHTML = Record[indx]._about;
    document.getElementById("fname").value = Record[indx]._firstName;
    document.getElementById("mname").value = Record[indx]._middleName;
    document.getElementById("lname").value = Record[indx]._lastName;
    document.getElementById("gender").value = Record[indx]._gender;
    document.getElementById("email").value = Record[indx]._email;
    document.getElementById("ageVal").value = Record[indx]._age;
    document.getElementById("age").value = Record[indx]._age;
    document.getElementById("experience").value = Record[indx]._experience;
    document.getElementById("experienceVal").value = Record[indx]._experience;
    document.getElementById("skills").value = Record[indx]._skills;
    document.getElementById("salary").value = Record[indx]._salary;
    document.getElementById("designation").value = Record[indx]._designation;
})();
