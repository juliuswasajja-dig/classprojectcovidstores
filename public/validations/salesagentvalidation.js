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
    // var salesagentphoto = document.salesagentform.salesagentimage.value;
    // var username = document.salesagentform.username.value;
    // //var password = document.salesagentform.password.value;

    // Defining error variables with a default value
    let firstnameErr = lastnameErr = true;
    let salesagentempidErr = true;


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
        printError("lastnameErr", "Please enter your lastname");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(lastnamevalue) === false) {
            printError("lastnameErr", "Please enter a valid lastname");
        } else {
            printError("lastnameErr", "");
            lastnameErr = false;
        }
    }
    if (salesagentempid == "") {
        printError("salesagentempidErr", "Please enter your lastname");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(salesagentempid) === false) {
            printError("salesagentempidErr", "Please enter a valid lastname");
        } else {
            printError("salesagentempidErr", "");
            salesagentempidErr = false;
        }
    }

    if (salesagentnin == "") {
        printError("salesagentninErr", "Please enter your lastname");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(salesagentnin) === false) {
            printError("salesagentninErr", "Please enter a valid lastname");
        } else {
            printError("salesagentninErr", "");
            salesagentninErrr = false;
        }
    }
    if ((firstnameErr || lastnameErr || salesagentempidErr || salesagentninErr) == true) {
        e.preventDefault();
        return false;
    } else {
        //Allow form to submit
        e.currentTarget.submit();
    }



})


// // Validate country
// if (country == "Select") {
//     printError("countryErr", "Please select your country");
// } else {
//     printError("countryErr", "");
//     countryErr = false;
// }

// // Validate gender
// if (gender == "") {
//     printError("genderErr", "Please select your gender");
// } else {
//     printError("genderErr", "");
//     genderErr = false;
// }

// // Validate mobile number
// if (mobile == "") {
//     printError("mobileErr", "Please enter your mobile number");
// } else {
//     var regex = /^[1-9]\d{9}$/;
//     if (regex.test(mobile) === false) {
//         printError("mobileErr", "Please enter a valid 10 digit mobile number");
//     } else {
//         printError("mobileErr", "");
//         mobileErr = false;
//     }
// }