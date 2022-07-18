$(document).ready(function () {
    $(".contact-forms").validate({
      rules: {
        name: {
          required: true,
          minlength: 4,
        },
        email: {
          required: true,
          email: true,
        },
        
        message: {
          required: true,
          minlength: 10,
          maxlength: 200,
        },
      },
      messages: {
        userName: {
          minlength: "Please Enter Your Full Name",
        },
        userEmail: {
          email: "Please enter a valid Email id",
        },
        
        message: {
          minlength: "Its too short! minimum 10 characters",
          maxlength: "Oh no! it's too large",
        },
      },
      submitHandler: function (form) {
        console.log("True");
        console.log("in function submit");
        submit();
      },
    });
  });
  function submit() {
      $.ajax({
        url: "https://script.google.com/macros/s/AKfycbzO9K33Mu1tdBmh9XoFVgA9V_kINkKw--ooxmvzfjAP6woeLRTDNH9msqr1CS_do9vB/exec",
        data: $(".contact-forms").serialize(),
        method: "POST",
        success: function (response) {
          alert("Form submitted successfully");
          window.location.reload();

        },
        error: function (err) {
          alert("Something Error");
        },
      });
  }