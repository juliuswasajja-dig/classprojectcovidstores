// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}
const salesagentForm = document.getElementById('salesagentform');

//salesagentform.addEventListener('submit', (e)
salesagentForm.addEventListener('submit', (e) => {
    // Defining a function to validate form 
    // Retrieving the values of form elements 
    var firstnamevalue = document.salesagentform.firstname.value;
    var lastnamevalue = document.salesagentform.lastname.value;
    var salesagentempid = document.salesagentform.salesagentempid.value;
    var salesagentnin = document.salesagentform.salesagentnin.value;
    var salesagentphoto = document.salesagentform.salesagentphoto.value;
    var username = document.salesagentform.username.value;
    var password = document.salesagentform.password.value;

    // Defining error variables with a default value
    let firstnameErr = lastnameErr = salesagentempidErr = salesagentninErr = salesagentphotoErr = usernameErr = passwordErr = true;
    // Validate firstname
    if (firstnamevalue == "") {
        printError("firstnameErr", "Please enter your firstname");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(firstnamevalue) === false) {
            printError("firstnameErr", "Please enter a valid firstname");
        } else {
            printError("firstnameErr", "");
            firstnameErr = false;
        }
    }
    //Validate lastname
    if (lastnamevalue == "") {
        printError("lastnameErr", "Please enter Lastname");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(lastnamevalue) === false) {
            printError("lastnameErr", "Please enter a valid lastname:SHOULD BE CHARACTERS ONLY");
        } else {
            printError("lastnameErr", "");
            lastnameErr = false;
        }
    }
    //Validate EMPID
    if (salesagentempid == "") {
        printError("salesagentempidErr", "Please enter EMPID");
    } else {
        var regex = /^[A-Z0-9\s]+$/;
        if (regex.test(salesagentempid) === false) {
            printError("salesagentempidErr", "Please enter a valid EMPID, SHOULD BE CAPS AND NUMBERS");
        } else {
            printError("salesagentempidErr", "");
            salesagentempidErr = false;
        }
    }

    // Validate National ID
    if (salesagentnin == "") {
        printError("salesagentninErr", "Please enter NIN: SHOULD NOT BE EMPTY");
    } else if (salesagentnin.length != 13) {
        printError("salesagentninErr", "Please enter a valid NIN :SHOULD BE 13 CHARACTERS");
    } else {
        var regex = /^[A-Z]{3}[0-9]{7}[A-Z]{3}$/;

        if (regex.test(salesagentnin) === false) {
            printError("salesagentninErr", "Please enter a valid NIN :SHOULD BE (3)nos.(7) Capital letters(3)nos.");
        } else {
            printError("salesagentninErr", "");
            salesagentninErr = false;
        }
    }


    // Validate Passport Image
    if (salesagentphoto == "") {
        printError("salesagentphotoErr", "Please upload Passport Photo");
    } else {
        printError("salesagentphotoErr", "");
        salesagentphotoErr = false;
    }
    // Validate USERNAME
    if (username == "") {
        printError("usernameErr", "Please Enter USERNAME");
    } else {
        printError("usernameErr", "");
        usernameErr = false;
    }

    // Validate PASSWORD
    if (password == "") {
        printError("passwordErr", "Please Enter PASSWORD");
    } else {
        printError("passwordErr", "");
        passwordErr = false;
    }



    //Preventing Default
    if ((firstnameErr || lastnameErr || salesagentempidErr || usernameErr || passwordErr || salesagentphotoErr || salesagentninErr) == true) {
        e.preventDefault();
        return false;
    } else {
        //Allow form to submit
        e.currentTarget.submit();
    }



})