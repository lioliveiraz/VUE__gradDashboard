export const validateInput = (userInputObj) => {
    let errorObj = {};
    let empID = userInputObj.empId && userInputObj.empId;
    let password = userInputObj.password && userInputObj.password;
    let name = userInputObj.name && userInputObj.name;

    const validateName = name.match(/^[a-z]{3,10}*$/gi);
    const validateEmpId = empID.match(/^[0-9]{6}$/g);
    const validatePassword = password.match(/^[a-zA-Z[:punct:]]{8,10}$/g);

    if (!validateName) {
        errorObj["name"] = " The name field has to contain only letters, no spaces and minimum 3 characters ";
    }
    if (!validateEmpId) {
        errorObj["empId"] = " ";
    } if (!validatePassword) {
        errorObj["password"] = "  ";
    }



    return errorObj;

};