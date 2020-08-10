// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}



const salesagent_form = document.getElementById('salesagentform')


salesagent_form.addEventListener('submit', (e) => {
    // Defining a function to validate form 
    // Retrieving the values of form elements 
    var firstname = document.salesagentform.firstname.value;
    var lastname = document.salesagentform.lastname.value;
    // var salesagentempid = document.salesagentform.salesagentempid.value;
    // var salesagentnin = document.salesagentform.salesagentnin.value;
    // var salesagentphoto = document.salesagentform.salesagentimage.value;
    // var username = document.salesagentform.username.value;
    // //var password = document.salesagentform.password.value;

    // Defining error variables with a default value
    var firstnameErr = lastnameErr = true;

    // Validate firstname
    if (firstname == "") {
        printError("firstnameErr", "Please enter your firstname");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(firstname) === false) {
            printError("firstnameErr", "Please enter a valid firstname");
        } else {
            printError("firstnameErr", "");
            firstnameErr = false;
        }
    }
    // Validate lastname
    if (lastname == "") {
        printError("lastnameErr", "Please enter your lastname");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(lastname) === false) {
            printError("lastnameErr", "Please enter a valid lastname");
        } else {
            printError("lastnameErr", "");
            lastnameErr = false;
        }
    }


    // // Validate empid
    // if (empid == "") {
    //     printError("emailErr", "Please enter your email address");
    // } else {
    //     // Regular expression for basic email validation
    //     var regex = /^\S+@\S+\.\S+$/;
    //     if (regex.test(email) === false) {
    //         printError("emailErr", "Please enter a valid email address");
    //     } else {
    //         printError("emailErr", "");
    //         emailErr = false;
    //     }
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

    // Prevent the form from being submitted if there are any errors
    if ((fisrtnameErr || lastnameErr) == true) {
        e.preventDefault();
    } else {
        e.currentTarget.submit();
    }

})