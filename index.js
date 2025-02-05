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
    details.phoneNumber = phone
    // using regular expression validate if the number is a valid kenyan number 
    // if it's not then alert the function, notify the user that the number is not valid
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
   // confirm password and confirm password are the same
   // retuen a boolean if the password match
}
submitButton.addEventListener("click", () => {
    const {firstName, lastName, email, password, phoneNumber, confirmPassword} = details

    ValidatePassword(password, confirmPassword)
})



