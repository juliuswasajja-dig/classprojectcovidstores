//national ID 3 chars in capital.7 numbers, 3 chars
//EMPID
//
//
//
//
//
//
//
//
//
//
//
//

var validate = () => {

    //Validating Firstname
    var firstname = document.formdata.firstname;
    //Fisrt name cannot be empty

    if (firstname.value.length == "") {
        firstname.style.border = '5px solid blue'
        alert("The First Name cannot be, Please fill it in ")

    }
    //Accepting right characters in First Name
    var letters = /^[A-Za-z]+$/;

    if (!firstname.value.match(letters)) {
        firstname.style.border = '5px solid green'
        alert("Enter the right First name, should start with letter")
    }
    //Validating Last name
    var lastname = document.formdata.lname;
    //Last name cannot be empty

    if (lastname.value.length == "") {
        lastname.style.border = '5px solid blue'
        alert("The Last Name cannot be, Please fill it in ")

    }

    //Accepting right characters in Last Name
    var letters = /^[A-Za-z]+$/;

    if (!lastname.value.match(letters)) {
        lastname.style.border = '5px solid green'
        alert("Enter the right Last name, should start with letter")
    }

    //Street Field Validation (cannot be empty)
    var street = document.formdata.street;
    if (street.value.length == "") {
        street.style.border = '5px solid blue'
        alert("The Street cannot be empty,please provide it")

    }
    //City Field Validation (cannot be empty)
    var city = document.formdata.city;
    if (city.value.length == "") {
        city.style.border = '5px solid blue'
        alert("The city cannot be empty,please provide it")

    }

    // Validating Biography
    var biography = document.formdata.biography;
    //Biograpgy length
    if (biography.value.length < 2000) {
        biography.style.border = '5px solid green'
        alert("2000 charcaters and above are allowed in this biography field, please add more information about yourself")
    }

    var letters = /^[A-Za-z]+$/;

    if (!biography.value.match(letters)) {
        biography.style.border = '5px solid blue'
        alert("Biography should start with letter")
    }


    //Validating the image (not sure of this one)
    var image = document.formdata.image;
    if (image.value.length == "") {
        image.style.border = '5px solid blue'
        alert("Please upload image")

    }

}