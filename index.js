console.log("HTML FORMS")

let details = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: ""

}

const firstName = document.getElementById("firstName")
const submitButton = document.getElementById("submitBtn")
const lastName = document.getElementById("lastName")
const email = document.getElementById("email")
const phoneNumber = document.getElementById("phoneNumber")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword")
const alertSpan = document.getElementById("alert-password")
firstName.addEventListener("change", (e) => {
const name = e.target.value
details.firstName = name
})

lastName.addEventListener("change", (e) => {
    const name = e.target.value
    details.lastNameName = name
    })

email.addEventListener("change", (e) => {
    const email = e.target.value
    details.email = email
})

phoneNumber.addEventListener("change", (e) => {
    const phone = e.target.value
    const phoneNumber = /^( \+254|0|254)(7)\d{8}$/;
    if (phoneNumber.test(phone)) {
        details.phoneNumber = phone;
        console.log("Valid Kenyan phone number");
    } else {
        alert("Invalid phone number! Please enter a valid Kenyan phone number.");
        e.target.value = ""; 
    }
})

password.addEventListener("change", (e) => {
    const password = e.target.value
    details.password = password
})

confirmPassword.addEventListener("change", (e) => {
    const confirmPassword = e.target.value
    details.confirmPassword = confirmPassword
})

function ValidatePassword(str1, str2){
    if (str1 == str2) {
        console.log("Passwords match");
        return true;
    } else {
        alert("Passwords do not match! Please re-enter the password.");
        return false;
    }
}

submitButton.addEventListener("click", () => {
    const {firstName, lastName, email, password, phoneNumber, confirmPassword} = details

    ValidatePassword(password, confirmPassword)
    window.location.href = "/dashboard.html"
})

alertSpan.classList.remove("alert-off-message")
alertSpan.classList.add("alert-on-message")

