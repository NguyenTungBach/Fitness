document.addEventListener("DOMContentLoaded",function (){
    $("form[name=register-form]").validate({
        rules:{
            name: "required",
            email: "required",
            phone: "required",
            message: "required"
        },
        messages:{
            name: "Please enter your name",
            email: "Please enter your email",
            phone: "Please enter your phone",
            message: "Please enter your message",
        },


        submitHandler: function (){
            alert("1");
        }
    })
})