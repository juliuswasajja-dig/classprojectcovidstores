// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}
const productForm = document.getElementById('productform');

productForm.addEventListener('submit', (e) => {
    // Defining a function to validate form 
    // Retrieving the values of form elements 
    var productname = document.productform.productname.value;
    var productimage = document.productform.productimage.value;
    var productmake = document.productform.productmake.value;
    var serialnumber = document.productform.serialnumber.value;
    var productcolor = document.productform.productcolor.value;
    var productcategory = document.productform.productcategory.value;
    var productQty = document.productform.productQty.value;


    // Defining error variables with a default value
    let productnameErr = productmakeErr = productimageErr = serialnumberErr = productcolorErr = productcategoryErr = productQtyErr = true;
    //let salesagentempidErr = lastnameErr = true;


    // Validate Product Name
    if (productname == "") {
        printError("productnameErr", "Please enter product name : SHOULD NOT BE EMPTY");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(productname) === false) {
            printError("productnameErr", "Please enter a valid Product Name: SHOULD BE CHARACTERS ONLY");
        } else {
            printError("productnameErr", "");
            productnameErr = false;
        }
    }

    //Validate Product Make
    if (productmake == "") {
        printError("productmakeErr", "Please enter product make: SHOULD NOT BE EMPTY");
    } else {
        var regex = /^[A-Z]{2}$/;
        //var regex = /^[A-Z\s]+$/;
        if (regex.test(productmake) === false) {
            printError("productmakeErr", "Please enter a valid Product Name: SHOULD BE 2 CAPITAL LETTERS ONLY");
        } else {
            printError("productmakeErr", "");
            productmakeErr = false;
        }
    }
    // Validate Serial Number
    if (serialnumber == "") {
        printError("serialnumberErr", "Please enter serial no. : SHOULD NOT BE EMPTY");
    } else if (serialnumber.length < 6 || serialnumber.length > 22) {
        printError("serialnumberErr", "Please enter a valid serial no. :SHOULD BETWEEN 6-22 CHARACTERS");
    } else {
        var regex = /^[A-Z0-9\s]+$/;
        if (regex.test(serialnumber) === false) {
            printError("serialnumberErr", "Please enter a valid Serial Number: SHOULD BE ALPHANUMERIC WITH CAPITAL CHARACTERS ONLY");
        } else {
            printError("serialnumberErr", "");
            serialnumberErr = false;
        }
    }
    // Validate image
    if (productimage == "") {
        printError("productimageErr", "Please Upload Image  ");
    } else {
        printError("productimageErr", "");
        productimageErr = false;
    }

    // Validate Color
    if (productcolor == "") {
        printError("productcolorErr", "Please enter product color: SHOULD NOT BE EMPTY");
    } else {
        var regex = /^[A-Z\s]+$/;
        if (regex.test(productcolor) === false) {
            printError("productcolorErr", "Please enter a valid Product Colour: SHOULD BE CAPITAL LETTERS ONLY");
        } else {
            printError("productcolorErr", "");
            productcolorErr = false;
        }
    }
    // Validate Catagory
    if (productcategory == "") {
        printError("productcategoryErr", "Please Select Product Category");
    } else {
        printError("productcategoryErr", "");
        productcategoryErr = false;
    }

    // Validate QTY
    if (productQty == "") {
        printError("productQtyErr", "Please enter product Quantity: SHOULD NOT BE EMPTY");
    } else {
        var regex = /^[0-9]+$/;
        if (regex.test(productQty) === false) {
            printError("productQtyErr", "Please enter a valid Product Colour: SHOULD BE NUMBER ONLY");
        } else {
            printError("productQtyErr", "");
            productQtyErr = false;
        }
    }



    if ((productnameErr || productimageErr || productmakeErr || serialnumberErr || productcolorErr || productcategoryErr || productQtyErr) == true) {
        e.preventDefault();
        return false;
    } else {
        //Allow form to submit
        e.currentTarget.submit();
    }


})