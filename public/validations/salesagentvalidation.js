// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}
const regForm = document.getElementById('regsales')
    // Defining a function to validate form 
regForm.addEventListener('submit', (event) => {


    //function validateForm() {
    // Retrieving the values of form elements 
    var firstname = document.regsalesform.firstname.value;
    var surname = document.regsalesform.surname.value;
    var username = document.regsalesform.username.value;
    //var email = document.regsalesform.email.value;
    // var nationalidnumber= document.regsalesForm.nationalidnumber.value;
    // // var country = [];
    // // // var checkboxes = document.getElementsByName("country[]");
    // // // for(var i=0; i < checkboxes.length; i++) {
    // // //     if(checkboxes[i].checked) {
    // // //         // Populate country array with selected values
    // // //         country.push(checkboxes[i].value);
    // // //     }
    // // // }

    // // Defining error variables with a default value
    var firstnameErr = surnameErr = emailErr = usernameErr = true;

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


    //validate surname
    if (surname == "") {
        printError("surnameErr", "Please enter your surname");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(surname) === false) {
            printError("surnameErr", "Please enter a valid surname");
        } else {
            printError("surnameErr", "");
            surnameErr = false;
        }
    }

    //validate username

    //validate surname
    if (username == "") {
        printError("usernameErr", "Please enter your username");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(username) === false) {
            printError("usernameErr", "Please enter a valid username");
        } else {
            printError("usernameErr", "");
            usernameErr = false;
        }
    }


    // Validate email address
    if (email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    // // // Validate mobile number
    // // if(mobile == "") {
    // //     printError("mobileErr", "Please enter your mobile number");
    // // } else {
    //     var regex = /^[1-9]\d{9}$/;
    //     if(regex.test(mobile) === false) {
    //         printError("mobileErr", "Please enter a valid 10 digit mobile number");
    //     } else{
    //         printError("mobileErr", "");
    //         mobileErr = false;
    //     }
    // }

    // // Validate country
    // if(country == "Select") {
    //     printError("countryErr", "Please select your country");
    // } else {
    //     printError("countryErr", "");
    //     countryErr = false;
    // }

    // // Validate gender
    // if(gender == "") {
    //     printError("genderErr", "Please select your gender");
    // } else {
    //     printError("genderErr", "");
    //     genderErr = false;
    // }

    // Prevent the form from being submitted if there are any errors
    if ((firstnameErr || surnameErr || emailErr || usernameErr) == true) {
        //return false; 
        event.preventDefault()
    } else {
        event.currentTarget.submit()
    }
});



// // Defining a function to display error message
// function printError(elemId, hintMsg) {
//     document.getElementById(elemId).innerHTML = hintMsg;
// }



// const regform = document.getElementById('salesagentform')


// regform.addEventListener('submit', (e) => {
//     // Defining a function to validate form 
//     // Retrieving the values of form elements 
//     var firstname = document.salesagentform.firstname.value;
//     var lastname = document.salesagentform.lastname.value;
//     // var salesagentempid = document.salesagentform.salesagentempid.value;
//     // var salesagentnin = document.salesagentform.salesagentnin.value;
//     // var salesagentphoto = document.salesagentform.salesagentimage.value;
//     // var username = document.salesagentform.username.value;
//     // //var password = document.salesagentform.password.value;


//     // Defining error variables with a default value
//     var firstnameErr = lastnameErr = true;

//     // Validate firstname
//     if (firstname == "") {
//         printError("firstnameErr", "Please enter your firstname");
//     } else {
//         var regex = /^[a-zA-Z\s]+$/;
//         if (regex.test(firstname) === false) {
//             printError("firstnameErr", "Please enter a valid firstname");
//         } else {
//             printError("firstnameErr", "");
//             firstnameErr = false;
//         }
//     }
//     // Validate lastname
//     if (lastname == "") {
//         printError("lastnameErr", "Please enter your lastname");
//     } else {
//         var regex = /^[a-zA-Z\s]+$/;
//         if (regex.test(lastname) === false) {
//             printError("lastnameErr", "Please enter a valid lastname");
//         } else {
//             printError("lastnameErr", "");
//             lastnameErr = false;
//         }
//     }


//     // // Validate empid
//     // if (empid == "") {
//     //     printError("emailErr", "Please enter your email address");
//     // } else {
//     //     // Regular expression for basic email validation
//     //     var regex = /^\S+@\S+\.\S+$/;
//     //     if (regex.test(email) === false) {
//     //         printError("emailErr", "Please enter a valid email address");
//     //     } else {
//     //         printError("emailErr", "");
//     //         emailErr = false;
//     //     }
//     // }

//     // // Validate mobile number
//     // if (mobile == "") {
//     //     printError("mobileErr", "Please enter your mobile number");
//     // } else {
//     //     var regex = /^[1-9]\d{9}$/;
//     //     if (regex.test(mobile) === false) {
//     //         printError("mobileErr", "Please enter a valid 10 digit mobile number");
//     //     } else {
//     //         printError("mobileErr", "");
//     //         mobileErr = false;
//     //     }
//     // }

//     // // Validate country
//     // if (country == "Select") {
//     //     printError("countryErr", "Please select your country");
//     // } else {
//     //     printError("countryErr", "");
//     //     countryErr = false;
//     // }

//     // // Validate gender
//     // if (gender == "") {
//     //     printError("genderErr", "Please select your gender");
//     // } else {
//     //     printError("genderErr", "");
//     //     genderErr = false;
//     // }

//     // Prevent the form from being submitted if there are any errors
//     if ((fisrtnameErr || lastnameErr) == true) {
//         e.preventDefault();
//     } else {
//         e.currentTarget.submit();
//     }

// })