// $(document).ready(function(){
//     $("#login_link").click(function(){
//         $("#signup").hide();
//         $("#login").show();
       
//         // $("#signup").fadeOut();
//         // $("#login").fadeIn();

//         // $("#div1").fadeIn();=*
//     });
//     $("#signup_link").click(function(){
//         $("#signup").show();
//         $("#login").hide();

//         // $("#signup").fadeIn();
//         // $("#login").fadeOut();
//     });
// });


const login = document.getElementById("login_link");
const signup = document.getElementById("signup_link");

login.onclick = function (){
    "#signup".hide()
    "#login".show()
}

signup.onclick = function (){
    hide("#login")
    show("#signup")
}
