let emailInput = document.getElementById("emailInput");
let emailInputErrorMessage = document.getElementById("emailInputErrorMessage");
let passwordInputErrorMessage = document.getElementById("passwordInputErrorMessage");
let passwordInput = document.getElementById("passwordInput");
let loginButton = document.getElementById("loginButton");
let errorMsg = document.getElementById("errorMsg");
let sectionDashboard = document.getElementById("sectionDashboard");
let sectionLogin = document.getElementById("sectionLogin");
let sectionSignUp = document.getElementById("sectionSignUp");
let signUpButton = document.getElementById("signUpButton");
let firstNameInput = document.getElementById("firstNameInput");
let lastNameInput = document.getElementById("lastNameInput");
let signUpEmailInput = document.getElementById("signUpEmailInput");
let signUpEmailInputErrorMessage = document.getElementById("signUpEmailInputErrorMessage");
let signUpFirstNameInputErrorMessage = document.getElementById("signUpFirstNameInputErrorMessage");
let signUpLasNameInputErrorMessage = document.getElementById("signUpLasNameInputErrorMessage");
let signUpNavLoginButton = document.getElementById("signUpNavLoginButton");
let sectionSetPassword = document.getElementById("sectionSetPassword");
let setPasswordInput = document.getElementById("setPasswordInput");
let setPasswordBtn = document.getElementById("setPasswordBtn");
let setPasswordInputErrorMsg = document.getElementById("setPasswordInputErrorMsg");
let numberInput = document.getElementById("numberInput");
let sectionSuccessful = document.getElementById("sectionSuccessful");
let numberInputErrorMsg = document.getElementById("numberInputErrorMsg");
let forgotEmailBtn = document.getElementById("forgotEmailBtn");
let forgotEmailInput = document.getElementById("forgotEmailInput");
let forgotEmailErrorMsg = document.getElementById("forgotEmailErrorMsg");
let sectionForgot = document.getElementById("sectionForgot");
let sectionForgotPassword = document.getElementById("sectionForgotPassword");
let forgotPasswordBtn = document.getElementById("forgotPasswordBtn");
let forgotPasswordInput = document.getElementById("forgotPasswordInput");
let forgotPasswordErrorMsg = document.getElementById("forgotPasswordErrorMsg");
let forgotConfirmPasswordInput = document.getElementById("forgotConfirmPasswordInput");
let forgotConfirmPasswordErrorMsg = document.getElementById("forgotConfirmPasswordErrorMsg");
let sectionMain = document.getElementById("sectionMain");
let sectionLogout = document.getElementById("sectionLogout");
let sectionMainLogin = document.getElementById("sectionMainLogin");
let sectionMainSignUp = document.getElementById("sectionMainSignUp");
let sectionRedirectLogin = document.getElementById("sectionRedirectLogin");
let loginBack = document.getElementById("loginBack");
let signUp = document.getElementById("signUp");
let dashboardWelcomeMsg = document.getElementById("dashboardWelcomeMsg");
let forgotLink = document.getElementById("forgotLink");
let sectionForgotBack = document.getElementById("sectionForgotBack");
let sectionForgotPasswordBack = document.getElementById("sectionForgotPasswordBack");
let sectionSetPasswordBack = document.getElementById("sectionSetPasswordBack");
let goToAdminDashboardBtn = document.getElementById("goToAdminDashboardBtn");
let goToUserDashboardBtn = document.getElementById("goToUserDashboardBtn");
let sectionAdminDashboard = document.getElementById("sectionAdminDashboard");
let sectionUserDashboard = document.getElementById("sectionUserDashboard");
let goToDbFromAdminBtn = document.getElementById("goToDbFromAdminBtn");
let goToDbFromUserBtn = document.getElementById("goToDbFromUserBtn");
let userDashboardWelcomeMsg = document.getElementById("userDashboardWelcomeMsg");
let usersCards = document.getElementById("usersCards");
let profileFirstNameInput = document.getElementById("profileFirstNameInput");
let profileLastNameInput = document.getElementById("profileLastNameInput");
let profileEmailInput = document.getElementById("profileEmailInput");
let profileNumberInput = document.getElementById("profileNumberInput");
let profileFirstNameInputErrMsg = document.getElementById("profileFirstNameInputErrMsg");
let profileLastNameInputErrMsg = document.getElementById("profileLastNameInputErrMsg");
let profileEmailInputErrMsg = document.getElementById("profileEmailInputErrMsg");
let profileNumberInputErrMsg = document.getElementById("profileNumberInputErrMsg");
let saveProfileBtn = document.getElementById("saveProfileBtn");
let workingCompanyInput = document.getElementById("workingCompanyInput");
let profileWorkingCompanyInput = document.getElementById("profileWorkingCompanyInput");
let qualificationInput = document.getElementById("qualificationInput");
let profileQualificationInput = document.getElementById("profileQualificationInput");
let profileQualificationInputErrMsg = document.getElementById("profileQualificationInputErrMsg");
let qualificationInputErrMsg = document.getElementById("qualificationInputErrMsg");
let userExistedErrMsg = document.getElementById("userExistedErrMsg");
let classTenPercentageInput = document.getElementById("classTenPercentageInput");
let profileClassTenPercentageInput = document.getElementById("profileClassTenPercentageInput");
let classTenPercentageInputErrMsg = document.getElementById("classTenPercentageInputErrMsg");
let profileClassTenPercentageInputErrMsg = document.getElementById("profileClassTenPercentageInputErrMsg");
let profileClassTwelvePercentageInput = document.getElementById("profileClassTwelvePercentageInput");
let profileClassTwelvePercentageInputErrMsg = document.getElementById("profileClassTwelvePercentageInputErrMsg");
let classTwelvePercentageInput = document.getElementById("classTwelvePercentageInput");
let classTwelvePercentageInputErrMsg = document.getElementById("classTwelvePercentageInputErrMsg");
let qualificationPercentageInput = document.getElementById("qualificationPercentageInput");
let qualificationPercentageInputErrMsg = document.getElementById("qualificationPercentageInputErrMsg");
let profileQualificationPercentageInput = document.getElementById("profileQualificationPercentageInput");
let profileQualificationPercentageInputErrMsg = document.getElementById("profileQualificationPercentageInputErrMsg");
let saveProfile = document.getElementById("saveProfile");
let invalidProfileDetails = document.getElementById("invalidProfileDetails");

function getNewUserDetailsFromLocalStorage() {
    let stringifiedNewUser = localStorage.getItem("newUser");
    let parsedNewUser = JSON.parse(stringifiedNewUser);
    return parsedNewUser;
}

let newUser = getNewUserDetailsFromLocalStorage();

function getForgotEmailFromLocalStorage() {
    let stringifiedEmail = localStorage.getItem("email");
    if (stringifiedEmail === null) {
        return "";
    } else {
        return stringifiedEmail;
    }
}
let emailId = getForgotEmailFromLocalStorage();

function getSignUpEmailFromLocalStorage() {
    let stringifiedSignUpEmail = localStorage.getItem("signUpEmail");
    let parsedSignUpEmail = JSON.parse(stringifiedSignUpEmail);
    if (parsedSignUpEmail === null) {
        return "";
    } else {
        return parsedSignUpEmail;
    }
}
let signUpEmail = getSignUpEmailFromLocalStorage();

function getUserNameFromLocalStorage() {
    let stringifiedUserName = localStorage.getItem("userName");
    let parsedUserName = JSON.parse(stringifiedUserName);
    if (parsedUserName === null) {
        return "";
    } else {
        return parsedUserName;
    }
}
let userName = getUserNameFromLocalStorage();
dashboardWelcomeMsg.textContent = `Hi ${userName}, Welcome to Admin Dashboard`;
userDashboardWelcomeMsg.textContent = `Hi ${userName}, Welcome to User Dashboard`;

function getDisplayDetailsFromLocalStorage() {
    let stringifiedDisplayDetails = localStorage.getItem("displayDetails");
    let parsedDisplayDetails = JSON.parse(stringifiedDisplayDetails);
    if (parsedDisplayDetails === null) {
        return {
            sectionMain: "block",
            sectionLogin: "none",
            sectionForgot: "none",
            sectionForgotPassword: "none",
            sectionSignUp: "none",
            sectionSetPassword: "none",
            sectionSuccessful: "none",
            sectionDashboard: "none",
            sectionAdminDashboard: "none",
            sectionUserDashboard: "none"

        };
    } else {
        return parsedDisplayDetails;
    }
}


let displayDetails = getDisplayDetailsFromLocalStorage();
sectionMain.style.display = displayDetails.sectionMain;
sectionLogin.style.display = displayDetails.sectionLogin;
sectionForgot.style.display = displayDetails.sectionForgot;
sectionForgotPassword.style.display = displayDetails.sectionForgotPassword;
sectionSignUp.style.display = displayDetails.sectionSignUp;
sectionSetPassword.style.display = displayDetails.sectionSetPassword;
sectionSuccessful.style.display = displayDetails.sectionSuccessful;
sectionDashboard.style.display = displayDetails.sectionDashboard;
sectionAdminDashboard.style.display = displayDetails.sectionAdminDashboard;
sectionUserDashboard.style.display = displayDetails.sectionUserDashboard;


function getUserListFromLocalStorage() {
    let stringifiedUserList = localStorage.getItem("userArray");
    let parsedUserList = JSON.parse(stringifiedUserList);
    if (parsedUserList === null) {
        return [];
    } else {
        return parsedUserList;
    }
}
let userArray = getUserListFromLocalStorage();

function getCountFromLocalStorage() {
    let stringifiedCount = localStorage.getItem("count");
    let parsedCount = JSON.parse(stringifiedCount);
    if (parsedCount === null) {
        return 0;
    } else {
        return parsedCount;
    }
}

let count = getCountFromLocalStorage();

function getTableDataFromLocalStorage() {
    let stringifiedTableData = localStorage.getItem("tableData");
    let parsedTableData = JSON.parse(stringifiedTableData);
    if (parsedTableData === null) {
        return ({
            labels: [],
            series: [
                []
            ]
        });
    } else {
        return parsedTableData;
    }
}

let data = getTableDataFromLocalStorage();

function getTableOptionsFromLocalStorage() {
    let stringifiedTableOptions = localStorage.getItem("tableOptions");
    let parsedTableOptions = JSON.parse(stringifiedTableOptions);
    if (parsedTableOptions === null) {
        return ({
            high: 0,
            low: 0,
        });
    } else {
        return parsedTableOptions;
    }
}

let options = getTableOptionsFromLocalStorage();
new Chartist.Bar('.ct-chart', data);

function clearSignupFields() {
    firstNameInput.value = "";
    signUpFirstNameInputErrorMessage.textContent = "";
    lastNameInput.value = "";
    signUpLastNameInputErrorMessage.textContent = "";
    numberInput.value = "";
    numberInputErrorMsg.textContent = "";
    signUpEmailInput.value = "";
    signUpEmailInputErrorMessage.textContent = "";
    userExistedErrMsg.textContent = "";
    signUpNavLoginButton.classList.add("custom-btn");
}

function deleteUser(userId) {
    if (userId !== newUser.userId) {
        let user = document.getElementById(userId);
        usersCards.removeChild(user);
        let index = userArray.findIndex((eachItem) => {
            if (eachItem.userId === userId) {
                return true;
            } else {
                return false;
            }
        })
        userArray.splice(index, 1);
        data.labels.splice(index, 1);
        data.series.splice(index, 1);
        let stringifiedUserList = JSON.stringify(userArray);
        localStorage.setItem("userArray", stringifiedUserList);
        let stringifiedTableData = JSON.stringify(data);
        localStorage.setItem("tableData", stringifiedTableData);
    } else {

    }
}

function addUsersToDashboard(user) {
    let {
        firstname,
        lastname,
        email,
        times,
        number,
        userId
    } = user;
    let userContainer = document.createElement("div");
    userContainer.classList.add("user-details-card", "shadow");
    userContainer.id = userId;
    usersCards.appendChild(userContainer);
    let userName = document.createElement("p");
    userName.textContent = firstname + lastname;
    userName.classList.add("user-details-card-heading");
    userContainer.appendChild(userName);
    let userFirstName = document.createElement("p");
    userFirstName.textContent = "firstname: " + firstname;
    userName.classList.add("user-details-card-paragraph");
    userContainer.appendChild(userFirstName);
    let userLastName = document.createElement("p");
    userLastName.textContent = "lastName: " + lastname;
    userName.classList.add("user-details-card-paragraph");
    userContainer.appendChild(userLastName);
    let userEmail = document.createElement("p");
    userEmail.textContent = "Email: " + email;
    userName.classList.add("user-details-card-paragraph");
    userContainer.appendChild(userEmail);
    let userNumber = document.createElement("p");
    userNumber.textContent = "Mobile: " + number;
    userName.classList.add("user-details-card-paragraph");
    userContainer.appendChild(userNumber);
    let timesPasswordChanged = document.createElement("p");
    timesPasswordChanged.textContent = "No of times password Changed: " + times;
    userName.classList.add("user-details-card-paragraph");
    userContainer.appendChild(timesPasswordChanged);
    let buttonContainer = document.createElement("div");
    buttonContainer.classList.add("delete-button-container")
    userContainer.appendChild(buttonContainer);
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete User";
    deleteButton.classList.add("btn", "btn-outline-danger");
    deleteButton.onclick = function() {
        deleteUser(userId);
    };
    buttonContainer.appendChild(deleteButton);
}

function clearLoginFields() {
    emailInput.value = "";
    emailInputErrorMessage.text = "";
    passwordInput.value = "";
    passwordInputErrorMessage.textContent = "";
    errorMsg.textContent = "";
}

sectionMainLogin.addEventListener("click", function() {
    sectionLogin.style.display = "block";
    sectionMain.style.display = "none";
    displayDetails.sectionLogin = "block";
    displayDetails.sectionMain = "none";
    let stringifiedDisplayDetails = JSON.stringify(displayDetails);
    localStorage.setItem("displayDetails", stringifiedDisplayDetails);
});
sectionMainSignUp.addEventListener("click", function() {
    sectionSignUp.style.display = "block";
    sectionMain.style.display = "none";
    displayDetails.sectionSignUp = "block";
    displayDetails.sectionMain = "none";
    let stringifiedDisplayDetails = JSON.stringify(displayDetails);
    localStorage.setItem("displayDetails", stringifiedDisplayDetails);
})

signUpNavLoginButton.addEventListener("click", function() {
    sectionLogin.style.display = "block";
    sectionSignUp.style.display = "none";
    displayDetails.sectionLogin = "block";
    displayDetails.sectionSignUp = "none";
    let stringifiedDisplayDetails = JSON.stringify(displayDetails);
    localStorage.setItem("displayDetails", stringifiedDisplayDetails);
    clearSignupFields();
});

loginBack.addEventListener("click", function() {
    emailInput.value = "";
    emailInputErrorMessage.textContent = "";
    passwordInput.value = "";
    passwordInputErrorMessage.textContent = "";
    sectionMain.style.display = "block";
    sectionLogin.style.display = "none";
    displayDetails.sectionMain = "block";
    displayDetails.sectionLogin = "none";
    let stringifiedDisplayDetails = JSON.stringify(displayDetails);
    localStorage.setItem("displayDetails", stringifiedDisplayDetails);
    clearLoginFields();

});
signUp.addEventListener("click", function() {
    sectionMain.style.display = "block";
    sectionSignUp.style.display = "none";
    displayDetails.sectionMain = "block";
    displayDetails.sectionSignUp = "none";
    userExistedErrMsg.textContent = "";
    signUpNavLoginButton.classList.add("custom-btn");
    let stringifiedDisplayDetails = JSON.stringify(displayDetails);
    localStorage.setItem("displayDetails", stringifiedDisplayDetails);
    clearSignupFields();
});

function validateInteger(num) {
    if (num !== "" && typeof(parseInt(num)) === typeof(1)) {
        return true;
    } else {
        return false;
    }
}



setPasswordBtn.addEventListener("click", function() {
    if (setPasswordInput.value === "") {
        setPasswordInputErrorMsg.textContent = "*Required";
    } else {
        if (newUser !== null) {
            newUser.password = setPasswordInput.value;
            userArray.push(newUser);
            let stringifiedArray = JSON.stringify(userArray);
            localStorage.setItem("userArray", stringifiedArray);
            data.labels.push([newUser.email]);
            count += 1;
            let stringifiedCount = JSON.stringify(count);
            localStorage.setItem("count", stringifiedCount);
            data.series[0].push(0);
            let stringifiedTableData = JSON.stringify(data);
            localStorage.setItem("tableData", stringifiedTableData);
            sectionSuccessful.style.display = "block";
            sectionSetPassword.style.display = "none";
            displayDetails.sectionSuccessful = "block";
            displayDetails.sectionSetPassword = "none";
            let stringifiedDisplayDetails = JSON.stringify(displayDetails);
            localStorage.setItem("displayDetails", stringifiedDisplayDetails);
            setPasswordInput.value = "";
            setPasswordInputErrorMsg.textContent = "";
            signUpEmailInput.value = "";
            signUpEmailInputErrorMessage.textContent = "";
            localStorage.setItem("newUser", null);
            addUsersToDashboard(newUser);
        }
    }
});

forgotEmailInput.addEventListener("blur", function() {
    if (forgotEmailInput.value === "") {
        forgotEmailErrorMsg.textContent = "*Required";
    } else {
        forgotEmailErrorMsg.textContent = "";
    }
});

function firstNameInputValidate() {
    if (firstNameInput.value === "") {
        signUpFirstNameInputErrorMessage.textContent = "*Required";
    } else {
        signUpFirstNameInputErrorMessage.textContent = "";
    }
}

function lastNameInputValidate() {
    if (lastNameInput.value === "") {
        signUpLastNameInputErrorMessage.textContent = "*Required";
    } else {
        signUpLastNameInputErrorMessage.textContent = "";
    }
}


function signUpEmailInputValidate() {
    if (signUpEmailInput.value === "") {
        signUpEmailInputErrorMessage.textContent = "*Required";
    } else {
        signUpEmailInputErrorMessage.textContent = "";
    }
}


function numberInputValidate() {
    let numberInputValue = parseInt(numberInput.value);
    console.log((numberInput.value).length);
    if (numberInputValue === "") {
        numberInputErrorMsg.textContent = "*Required";
    } else {
        if (typeof(numberInputValue) === typeof(1) && (numberInput.value).length === 10) {
            numberInputErrorMsg.textContent = "";
        } else {
            numberInputErrorMsg.textContent = "Invalid Number";
        }
    }
}
firstNameInput.addEventListener("blur", firstNameInputValidate);
lastNameInput.addEventListener("blur", lastNameInputValidate);
signUpEmailInput.addEventListener("blur", signUpEmailInputValidate);
numberInput.addEventListener("blur", numberInputValidate);

function validateSignUp() {
    if (userArray.length < 5) {
        let numberInputValue = parseInt(numberInput.value);
        if ((firstNameInput.value !== "") && (lastNameInput.value !== "") && (signUpEmailInput.value !== "") && (numberInput.value !== "") && (typeof(numberInputValue) === typeof(1)) && ((numberInput.value).length === 10)) {
            let user = userArray.find((eachItem) => {
                if (eachItem.email === signUpEmailInput.value) {
                    return true;
                } else {
                    return false;
                }
            });
            if (user === undefined) {
                userId = "user" + count;
                newUser = {
                    userId: userId,
                    firstname: firstNameInput.value,
                    lastname: lastNameInput.value,
                    email: signUpEmailInput.value,
                    password: null,
                    number: numberInput.value,
                    times: 0,
                    tenth: "",
                    twelth: "",
                    qualification: "",
                    qualificationPercentage: "",
                    company: ""
                };
                let stringifiedNewUser = JSON.stringify(newUser);
                localStorage.setItem("newUser", stringifiedNewUser);
                sectionSetPassword.style.display = "block";
                sectionSignUp.style.display = "none";
                displayDetails.sectionSetPassword = "block";
                displayDetails.sectionSignUp = "none";
                let stringifiedDisplayDetails = JSON.stringify(displayDetails);
                localStorage.setItem("displayDetails", stringifiedDisplayDetails);
                userExistedErrMsg.textContent = "";
                signUpNavLoginButton.classList.add("custom-btn");
                clearSignupFields();
            } else {
                userExistedErrMsg.textContent = "User already exists";
                signUpNavLoginButton.classList.remove("custom-btn");
            }
        } else {
            firstNameInputValidate();
            lastNameInputValidate();
            signUpEmailInputValidate();
            numberInputValidate();
        }
    } else {
        userExistedErrMsg.textContent = "Limit Exceeded";
        userExistedErrMsg.classList.add("error");
    }
}

saveProfileBtn.addEventListener("click", function() {
    if ((profileFirstNameInput.value !== "") && (profileLastNameInput.value !== "") && (profileNumberInput.value !== "") && (typeof(parseInt(profileNumberInput.value)) === typeof(1)) && (((profileNumberInput.value).toString()).length === 10) && (validateInteger(profileClassTenPercentageInput.value)) && (validateInteger(profileQualificationPercentageInput.value)) && (validateInteger(profileClassTwelvePercentageInput.value))) {
        let index = userArray.findIndex((eachItem) => {
            if (eachItem.email === emailId) {
                return true;
            }
        })
        if (index !== -1) {
            userArray[index].firstname = profileFirstNameInput.value;
            userArray[index].lastname = profileLastNameInput.value;
            userArray[index].number = parseInt(profileNumberInput.value);
            userArray[index].qualification = profileQualificationInput.value;
            userArray[index].company = profileWorkingCompanyInput.value;
            userArray[index].tenth = parseInt(profileClassTenPercentageInput.value);
            userArray[index].twelth = parseInt(profileClassTwelvePercentageInput.value);
            userArray[index].qualificationPercentage = parseInt(profileQualificationPercentageInput.value);
            newUser = userArray[index];
            invalidProfileDetails.classList.add("d-none");
            saveProfile.classList.remove("success-msg-display");
            let stringifiedUserArray = JSON.stringify(userArray);
            localStorage.setItem("userArray", stringifiedUserArray);
            let stringifiedNewUser = JSON.stringify(newUser);
            localStorage.setItem("newUser", stringifiedNewUser);

        }
    } else {
        saveProfile.classList.add("success-msg-display");
        invalidProfileDetails.classList.remove("d-none");
    }
})


function fillUserDetails(user) {
    profileFirstNameInput.value = user.firstname;
    profileLastNameInput.value = user.lastname;
    profileEmailInput.textContent = user.email;
    profileNumberInput.value = user.number;
    profileQualificationInput.value = user.qualification;
    profileWorkingCompanyInput.value = user.company;
    profileQualificationPercentageInput.value = user.qualificationPercentage;
    profileClassTenPercentageInput.value = user.tenth;
    profileClassTwelvePercentageInput.value = user.twelth;
}

function logUserIn(emailInputValue, passwordInputValue) {
    let user = userArray.find((eachItem) => {
        if (eachItem.email === emailInputValue) {
            return true;
        } else {
            return false;
        }
    });
    if (user !== undefined) {
        if (user.password !== passwordInputValue) {
            errorMsg.textContent = "Invalid password";
        } else {
            errorMsg.textContent = "";
            userName = user.firstname + user.lastname;
            dashboardWelcomeMsg.textContent = `Hi ${userName}, Welcome to Admin Dashboard`;
            userDashboardWelcomeMsg.textContent = `Hi ${userName}, Welcome to User Dashboard`;
            let stringifiedUserName = JSON.stringify(userName);
            localStorage.setItem("userName", stringifiedUserName);
            sectionDashboard.style.display = "block";
            sectionForgotPassword.style.display = "none";
            sectionLogin.style.display = "none";
            displayDetails.sectionDashboard = "block";
            displayDetails.sectionLogin = "none";
            displayDetails.sectionForgotPassword = "none";
            let stringifiedDisplayDetails = JSON.stringify(displayDetails);
            localStorage.setItem("displayDetails", stringifiedDisplayDetails);
            newUser = user;
            let stringifiedNewUser = JSON.stringify(newUser);
            localStorage.setItem("newUser", stringifiedNewUser);
            emailId = user.email;
            localStorage.setItem("email", emailId);
            fillUserDetails(newUser);
            clearLoginFields();
        }
    } else {
        if (user === undefined) {
            errorMsg.textContent = "Invalid User";
        }
    }
}

function validateLogin() {
    let emailInputValue = emailInput.value;
    let passwordInputValue = passwordInput.value;
    if ((emailInputValue !== "") && (passwordInputValue !== "")) {
        logUserIn(emailInputValue, passwordInputValue);
        emailInput.value = "";
        passwordInput.value = "";
    } else {
        if (emailInputValue === "") {
            emailInputErrorMessage.textContent = "*Required";
        } else {
            emailInputErrorMessage.textContent = "";
        }
        if (passwordInputValue === "") {
            passwordInputErrorMessage.textContent = "*Required";
        } else {
            passwordInputErrorMessage.textContent = "";
        }
    }
}



emailInput.addEventListener("blur", function() {
    if (emailInput.value === "") {
        emailInputErrorMessage.textContent = "*Required";
    } else {
        emailInputErrorMessage.textContent = "";
    }
});
passwordInput.addEventListener("blur", function() {
    if (passwordInput.value === "") {
        passwordInputErrorMessage.textContent = "*Required";
    } else {
        passwordInputErrorMessage.textContent = "";
    }
});

loginButton.addEventListener("click", validateLogin);
signUpButton.addEventListener("click", validateSignUp);

forgotEmailBtn.addEventListener("click", function() {
    if (forgotEmailInput.value !== "") {
        let index = userArray.findIndex((eachItem) => {
            if (eachItem.email === forgotEmailInput.value) {
                return true;
            }
        });
        if (index !== -1) {
            emailId = userArray[index].email;
            localStorage.setItem("email", emailId);
            sectionForgotPassword.style.display = "block";
            sectionForgot.style.display = "none";
            displayDetails.sectionForgotPassword = "block";
            displayDetails.sectionForgot = "none";
            let stringifiedDisplayDetails = JSON.stringify(displayDetails);
            localStorage.setItem("displayDetails", stringifiedDisplayDetails);
            forgotEmailInput.value = "";
            forgotEmailErrorMsg.textContent = "";
        } else {
            forgotEmailErrorMsg.textContent = "Invalid User";
        }
    } else {
        forgotEmailErrorMsg.textContent = "*Required";
    }
});
forgotPasswordBtn.addEventListener("click", function() {
    if (forgotPasswordInput.value !== "" && forgotConfirmPasswordInput.value !== "") {
        let index = userArray.findIndex((eachItem) => {
            if (eachItem.email === emailId) {
                return true;
            }
        });
        if (index !== -1) {
            if (forgotPasswordInput.value === forgotConfirmPasswordInput.value) {
                userArray[index].password = forgotPasswordInput.value;
                userArray[index].times += 1;
                let stringifiedArray = JSON.stringify(userArray);
                localStorage.setItem("userArray", stringifiedArray);
                data.series[0][index] += 1;
                if (options.high < data.series[0][index]) {
                    options.high = data.series[0][index];
                };
                let stringifiedTableOptions = JSON.stringify(options);
                localStorage.setItem("tableOptions", stringifiedTableOptions);
                let stringifiedTableData = JSON.stringify(data);
                localStorage.setItem("tableData", stringifiedTableData);
                sectionForgotPassword.style.display = "none";
                sectionLogin.style.display = "block";
                displayDetails.sectionLogin = "block";
                displayDetails.sectionForgotPassword = "none";
                let stringifiedDisplayDetails = JSON.stringify(displayDetails);
                localStorage.setItem("displayDetails", stringifiedDisplayDetails);
                forgotPasswordInput.value = "";
                forgotConfirmPasswordInput.value = "";

                forgotEmailInput.value = "";
                emailId = "";
                localStorage.setItem("email", emailId);
            } else {
                forgotConfirmPasswordErrorMsg.textContent = "password Doesn't Match";
            }
        }
    } else {
        if (forgotPasswordInput.value === "") {
            forgotPasswordErrorMsg.textContent = "*Required";
        }
        if (forgotConfirmPasswordInput.value === "") {
            forgotConfirmPasswordErrorMsg.textContent = "*Required";
        }

    }
})
sectionRedirectLogin.addEventListener("click", function() {
    sectionLogin.style.display = "block";
    sectionSuccessful.style.display = "none";
    displayDetails.sectionLogin = "block";
    displayDetails.sectionSuccessful = "none";
    let stringifiedDisplayDetails = JSON.stringify(displayDetails);
    localStorage.setItem("displayDetails", stringifiedDisplayDetails);
})
sectionLogout.addEventListener("click", function() {
    sectionMain.style.display = "block";
    sectionDashboard.style.display = "none";
    displayDetails.sectionMain = "block";
    displayDetails.sectionDashboard = "none";
    let stringifiedDisplayDetails = JSON.stringify(displayDetails);
    localStorage.setItem("displayDetails", stringifiedDisplayDetails);
})

sectionSetPasswordBack.addEventListener("click", function() {
    sectionSignUp.style.display = "block";
    sectionSetPassword.style.display = "none";
    displayDetails.sectionSignUp = "block";
    displayDetails.sectionSetPassword = "none";
    let stringifiedDisplayDetails = JSON.stringify(displayDetails);
    localStorage.setItem("displayDetails", stringifiedDisplayDetails);
})
sectionForgotBack.addEventListener("click", function() {
    sectionLogin.style.display = "block";
    sectionForgot.style.display = "none";
    displayDetails.sectionLogin = "block";
    displayDetails.sectionForgot = "none";
    let stringifiedDisplayDetails = JSON.stringify(displayDetails);
    localStorage.setItem("displayDetails", stringifiedDisplayDetails);
})
sectionForgotPasswordBack.addEventListener("click", function() {
    sectionForgot.style.display = "block";
    sectionForgotPassword.style.display = "none";
    displayDetails.sectionForgot = "block";
    displayDetails.sectionForgotPassword = "none";
    let stringifiedDisplayDetails = JSON.stringify(displayDetails);
    localStorage.setItem("displayDetails", stringifiedDisplayDetails);
})

goToAdminDashboardBtn.addEventListener("click", function() {
    sectionAdminDashboard.style.display = "block";
    sectionDashboard.style.display = "none";
    displayDetails.sectionAdminDashboard = "block";
    displayDetails.sectionDashboard = "none";
    let stringifiedDisplayDetails = JSON.stringify(displayDetails);
    localStorage.setItem("displayDetails", stringifiedDisplayDetails);
})
goToDbFromAdminBtn.addEventListener("click", function() {
    sectionAdminDashboard.style.display = "none";
    sectionDashboard.style.display = "block";
    displayDetails.sectionAdminDashboard = "none";
    displayDetails.sectionDashboard = "block";
    let stringifiedDisplayDetails = JSON.stringify(displayDetails);
    localStorage.setItem("displayDetails", stringifiedDisplayDetails);
})
goToUserDashboardBtn.addEventListener("click", function() {
    sectionUserDashboard.style.display = "block";
    sectionDashboard.style.display = "none";
    sectionAdminDashboard.style.display = "none";
    displayDetails.sectionUserDashboard = "block";
    displayDetails.sectionAdminDashboard = "none";
    displayDetails.sectionDashboard = "none";
    let stringifiedDisplayDetails = JSON.stringify(displayDetails);
    localStorage.setItem("displayDetails", stringifiedDisplayDetails);
    fillUserDetails(newUser);
})
goToDbFromUserBtn.addEventListener("click", function() {
    sectionUserDashboard.style.display = "none";
    sectionDashboard.style.display = "block";
    displayDetails.sectionUserDashboard = "none";
    displayDetails.sectionDashboard = "block";
    let stringifiedDisplayDetails = JSON.stringify(displayDetails);
    localStorage.setItem("displayDetails", stringifiedDisplayDetails);
    saveProfile.classList.add("success-msg-display");
    invalidProfileDetails.classList.add("d-none");
})

forgotLink.addEventListener("click", function() {
    sectionForgot.style.display = "block";
    sectionLogin.style.display = "none";
    displayDetails.sectionForgot = "block";
    displayDetails.sectionLogin = "none";
    let stringifiedDisplayDetails = JSON.stringify(displayDetails);
    localStorage.setItem("displayDetails", stringifiedDisplayDetails);
    clearLoginFields();
})
for (let each of userArray) {
    addUsersToDashboard(each);
}
if (newUser !== null) {
    fillUserDetails(newUser);
}