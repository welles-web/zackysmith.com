function submitToAPI(e) {
    e.preventDefault();
    var URL = "https://03avqlvov6.execute-api.us-east-1.amazonaws.com/v-0-0-2/contact-us";

    var Namere = /[A-Za-z]{1}[A-Za-z]/;
    if (!Namere.test($("#name-input").val())) {
        alert("Please enter your name.");
        return;
    }
    var mobilere = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (!mobilere.test($("#phone-input").val())) {
        alert("Please enter valid mobile number");
        return;
    }
    if ($("#email-input").val() == "") {
        alert("Please enter a valid email address.");
        return;
    }

    var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
    if (!reeamil.test($("#email-input").val())) {
        alert("Please enter a valid email address.");
        return;
    }

    var name = $("#name-input").val();
    var phone = $("#phone-input").val();
    var email = $("#email-input").val();
    var desc = $("#description-input").val();
    var sub = $("#sub-input").val();
    var data = {
        name: name,
        phone: phone,
        email: email,
        desc: desc,
        sub: sub
    };

    $.ajax({
        type: "POST",
        url: "https://03avqlvov6.execute-api.us-east-1.amazonaws.com/v-0-0-2/contact-us",
        dataType: "json",
        crossDomain: "true",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(data),


        success: function () {
            // clear form and show a success message
            alert("Successfull");
            document.getElementById("contactForm").reset();
            location.reload();
        },
        error: function () {
            // show an error message
            alert("UnSuccessfull");
        }
    });
}
