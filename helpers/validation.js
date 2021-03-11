export const userValidation = (userInputObj) => {
    let errorObj = {};
    let empId = userInputObj.empId;
    let password = userInputObj.password;
    let name = userInputObj.name;


    const validateName = name ? name.match(/^[a-zA-Z_ ]+$/g) : true;
    const validateEmpId = empId ? empId.match(/^[0-9]{6}$/g) : true;
    /*     const validatePassword = password ? password.match(/^[a-zA-Z[:punct:]]{8,10}$/g) : true;
     */
    if (!validateName) {
        errorObj["name"] = " The name field has to contain only letters, no spaces and minimum 3 characters ";
    }
    if (!validateEmpId) {
        errorObj["empId"] = "This field has to contain only numbers and 6 characters ";
    } /* if (!validatePassword) {
        errorObj["password"] = "This field has to contain uppercase letters, lowercase letters,  special characters, min of 6 characters max of 8 characters  ";
    } */


    return errorObj;

};

export const courseValidation = (userInputObj) => {
    let errorObj = {};
    let week = userInputObj.week;
    let courseCode = userInputObj.course_code;
    let courseName = userInputObj.course_name;
    let source = userInputObj.source;

    const validateCourseName = courseName ? courseName.match(/^[a-zA-Z_ ]+$/g) : true;
    const validateSource = source ? source.match(/^[a-z]{3,30}$/gi) : true;
    const validateWeek = week ? week > 0 && week < 53 : true;
    const validateCourseCode = courseCode ? courseCode.match(/^[0-9]{6}$/g) : true;
    if (!validateCourseName) {
        errorObj["course_name"] = " The name field has to contain only letters and minimum 3 characters ";
    }
    if (!validateSource) {
        errorObj["source"] = " The source field has to contain only letters, no spaces and minimum 3 characters ";
    }
    if (!validateWeek) {
        errorObj["week"] = " Week cannot be 0 or greater than 52 ";
    }
    if (!validateCourseCode) {
        errorObj["course_code"] = " This field has to contain only numbers and 6 characters";
    }

    return errorObj;

};