// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}
const purchaseForm = document.getElementById('purchaseform');

purchaseForm.addEventListener('submit', (e) => {
    // Defining a function to validate form 
    // Retrieving the values of form elements 
    var customername = document.purchaseform.customername.value;
    var nationalidnumber = document.purchaseform.nationalidnumber.value;
    var nationalidimage = document.purchaseform.nationalidimage.value;
    var location = document.purchaseform.location.value;
    var address = document.purchaseform.address.value;
    var phoneno = document.purchaseform.phoneno.value;
    var customeremail = document.purchaseform.customeremail.value;
    var productname = document.purchaseform.productname.value;
    var productserialnumber = document.purchaseform.productserialnumber.value;
    var initialpay = document.purchaseform.initialpay.value;
    var dateofinitialpay = document.purchaseform.dateofinitialpay.value;
    var amountofnextpayment = document.purchaseform.amountofnextpayment.value;
    var dateofnextpayment = document.purchaseform.dateofnextpayment.value;
    var purchasereceipt = document.purchaseform.purchasereceipt.value;
    var refereename = document.purchaseform.refereename.value;
    var refereetelnumber = document.purchaseform.refereetelnumber.value;



    // location || address || phoneno || customeremail || productname || 
    // productserialnumber || initialpay


    // Defining error variables with a default value
    let customernameErr = nationalidnumberErr = nationalidimageErr = purchasereceiptErr = dateofnextpaymentErr = amountofnextpaymentErr = dateofinitialpayErr = initialpayErr = productserialnumberErr = productnameErr = customeremailErr = phonenoErr = addressErr = locationErr = nationalidimageErr = refereetelnumberErr = refereenameErr = true;


    // Validate Customer Name
    if (customername == "") {
        printError("customernameErr", "Please enter customer name : SHOULD NOT BE EMPTY");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(customername) === false) {
            printError("customernameErr", "Please enter a valid Customer Name: SHOULD BE CHARACTERS ONLY");
        } else {
            printError("customernameErr", "");
            customernameErr = false;
        }
    }
    // Validate National ID
    if (nationalidnumber == "") {
        printError("nationalidnumberErr", "Please enter National ID: SHOULD NOT BE EMPTY");
    } else if (nationalidnumber.length != 13) {
        printError("nationalidnumberErr", "Please enter a valid NIN :SHOULD BE 13 CHARACTERS");
    } else {
        var regex = /^[A-Z]{3}[0-9]{7}[A-Z]{3}$/;

        if (regex.test(nationalidnumber) === false) {
            printError("nationalidnumberErr", "Please enter a valid NIN :SHOULD BE (3)nos.(7) Capital letters(3)nos.");
        } else {
            printError("nationalidnumberErr", "");
            nationalidnumberErr = false;
        }
    }
    // Validate NIN Image
    if (nationalidimage == "") {
        printError("nationalidimageErr", "Please upload National ID");
    } else {
        printError("nationalidimageErr", "");
        nationalidimageErr = false;
    }


    // Validate Product Initial Pay

    if (initialpay == "") {
        printError("initialpayErr", "Please enter Initial Pay: SHOULD NOT BE EMPTY");
    } else {
        var regex = /^[0-9\s]+$/;

        // var regex = /^[A-Z]{3}[0-9]{7}[A-Z]{3}$/;
        // var regex = /^\$?(([1-9]\d{0,2}(,\d{3})*)|0)?\.\d{1,2}$;
        if (regex.test(initialpay) === false) {
            printError("initialpayErr", "Please enter a valid payment :SHOULD BE 00.00");
        } else {
            printError("initialpayErr", "");
            initialpayErr = false;
        }
    }


    // Validate location
    if (location == "") {
        printError("locationErr", "Please enter District");
    } else {
        printError("locationErr", "");
        locationErr = false;
    }

    // Validate Address
    if (address == "") {
        printError("addressErr", "Please enter an Address");
    } else {
        printError("addressErr", "");
        addressErr = false;
    }


    // Validate Phone Number
    if (phoneno == "") {
        printError("phonenoErr", "Please enter Phone Number");
    } else {
        printError("phonenoErr", "");
        phonenoErr = false;
    }
    // Validate Customer
    if (customeremail == "") {
        printError("customeremailErr", "Please enter an Email Address");
    } else {
        printError("customeremailErr", "");
        customeremailErr = false;
    }
    // Validate Product Name
    if (productname == "") {
        printError("productnameErr", "Please enter a Product Name");
    } else {
        printError("productnameErr", "");
        productnameErr = false;
    }
    // Validate Product Serial Number
    if (productserialnumber == "") {
        printError("productserialnumberErr", "Please enter a Product Serial Number");
    } else {
        printError("productserialnumberErr", "");
        productserialnumberErr = false;
    }

    /*
    else {
                    var regex = /^[A-Z]{3}[0-9]{7}[A-Z]{3}$/;
                    if (regex.test(initialpay) === false) {
                        printError("initialpayErr", "Please enter a valid NIN :SHOULD BE (3)nos.(7)letters(3)nos.");
                    }*/

    //
    // Validate Product dateofinitialpay
    if (dateofinitialpay == "") {
        printError("dateofinitialpayErr", "Please enter Date of Initial Pay");
    } else {
        printError("dateofinitialpayErr", "");
        dateofinitialpayErr = false;
    }
    // Validate Product amountofnextpayment
    if (amountofnextpayment == "") {
        printError("amountofnextpaymentErr", "Please enter Amount Due Next Payment");
    } else {
        printError("amountofnextpaymentErr", "");
        amountofnextpaymentErr = false;
    }
    // Validate Product dateofnextpayment
    if (dateofnextpayment == "") {
        printError("dateofnextpaymentErr", "Please enter a Date of Next Payment");
    } else {
        printError("dateofnextpaymentErr", "");
        dateofnextpaymentErr = false;
    }
    // Validate Product purchasereceipt
    if (purchasereceipt == "") {
        printError("purchasereceiptErr", "Please Upload Purchase Receipt");
    } else {
        printError("purchasereceiptErr", "");
        purchasereceiptErr = false;
    }
    // Validate refereename
    if (refereename == "") {
        printError("refereenameErr", "Please enter a Referee Name");
    } else {
        printError("refereenameErr", "");
        refereenameErr = false;
    }
    // Validate Product refereetelnumber
    if (refereetelnumber == "") {
        printError("refereetelnumberErr", "Please enter Referee Telephone Number");
    } else {
        printError("refereetelnumberErr", "");
        refereetelnumberErr = false;
    }

    if ((customernameErr || nationalidnumberErr || nationalidimageErr || purchasereceiptErr || dateofnextpaymentErr || amountofnextpaymentErr || dateofinitialpayErr || initialpayErr || productserialnumberErr || productnameErr || customeremailErr || phonenoErr || addressErr || locationErr || refereetelnumberErr || refereenameErr) == true) {
        e.preventDefault();
        return false;
    } else {
        //Allow form to submit
        e.currentTarget.submit();
    }


})





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